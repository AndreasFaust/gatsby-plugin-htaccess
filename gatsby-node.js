const fs = require('fs-extra')
const path = require('path')

const setWWW = require('./utils/setWWW')
const setHTTPS = require('./utils/setHttps')
const setRewrites = require('./utils/setRewrites')
const setRewriteBase = require('./utils/setRewriteBase')
const setSymlinks = require('./utils/setSymlinks')
const setCustom = require('./utils/setCustom')

const getPath = (htPath, program) => path.join(program.directory, htPath, '.htaccess')
const contentReadFile = (pathToFile) => fs.readFileSync(pathToFile, 'utf8')

const getContent = (pathToFile, pluginOptions) => {
    let content = contentReadFile(pathToFile)
    content = setWWW(content, pluginOptions.www)
    content = setHTTPS(content, pluginOptions.https)
    content = setRewrites(content, pluginOptions.redirect)
    content = setRewriteBase(content, pluginOptions.RewriteBase)
    content = setSymlinks(content, pluginOptions.SymLinksIfOwnerMatch)
    content = setCustom(content, pluginOptions.custom)
    return content
}

exports.onPostBuild = async ({ store }, pluginOptions) => {
    const { program } = store.getState()
    const { redirects, www } = pluginOptions

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

// exports.onPostBuild = ({ store }, pluginOptions) => {
//     const { program } = store.getState()
//     const { redirects, www } = pluginOptions

//     const htPath = getPath('public', program)
//     const htContent = getContent(path.join(__dirname, 'utils/files/htaccess'), pluginOptions)

//     const htStaticPath = getPath('public/static', program)
//     const htStaticContent = contentReadFile(path.join(__dirname, 'utils/files/static-htaccess'))

//     // // Return a promise chain
//     return fs
//         .ensureFile(htPath)
//         .then(() => {
//             fs.writeFile(htPath, htContent)
//             fs.writeFile(htStaticPath, htStaticContent)
//         })
//         .catch(e => console.error('onPostBuild error #hq0Kxa', JSON.stringify(e)))
// }
