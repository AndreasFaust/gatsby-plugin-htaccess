const fs = require('fs-extra')
const path = require('path')

const setHost = require('./utils/setHost')
const setWWW = require('./utils/setWWW')
const setErrorDocument = require('./utils/setErrorDocument')
const setHTTPS = require('./utils/setHttps')
const setRewrites = require('./utils/setRewrites')
const setRewriteBase = require('./utils/setRewriteBase')
const setDisallowSymLinks = require('./utils/setDisallowSymLinks')
const setSymLinksIfOwnerMatch = require('./utils/setSymLinksIfOwnerMatch')
const setCustom = require('./utils/setCustom')

const getPath = (htPath, program) => path.join(program.directory, htPath, '.htaccess')
const contentReadFile = pathToFile => fs.readFileSync(pathToFile, 'utf8')

const getContent = (pathToFile, pluginOptions) => {
  let content = contentReadFile(pathToFile)
  content = setHost(content, pluginOptions.host)
  content = setWWW(content, pluginOptions.www)
  content = setErrorDocument(content, pluginOptions.ErrorDocument)
  content = setHTTPS(content, pluginOptions.https)
  content = setRewrites(content, pluginOptions.redirect)
  content = setRewriteBase(content, pluginOptions.RewriteBase)
  content = setDisallowSymLinks(content, pluginOptions.DisallowSymLinks)
  content = setSymLinksIfOwnerMatch(content, pluginOptions.SymLinksIfOwnerMatch)
  content = setCustom(content, pluginOptions.custom)
  return content
}

exports.onPostBuild = async ({ store }, pluginOptions) => {
  const { program } = store.getState()
  // const { redirects, www } = pluginOptions

  const htPath = getPath('public', program)
  const htContent = getContent(path.join(__dirname, 'utils/files/htaccess'), pluginOptions)

  const htStaticPath = getPath('public/static', program)
  const htStaticContent = contentReadFile(path.join(__dirname, 'utils/files/static-htaccess'))

  // // Return a promise chain
  try {
    await fs.ensureFile(htPath)
  } catch (e) {
    console.error('onPostBuild error #hq0Kxa', JSON.stringify(e))
    return
  }
  await fs.writeFile(htPath, htContent)
  await fs.writeFile(htStaticPath, htStaticContent)

  return
}
