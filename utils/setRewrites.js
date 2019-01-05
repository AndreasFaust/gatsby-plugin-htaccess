const fp = require('lodash/fp')
const trimSlashes = fp.trimChars('/')

const pattern = (rd) => {
    if (rd.from && rd.to) {
        const from = trimSlashes(rd.from).replace('.', '\\.')
        const to = trimSlashes(rd.to).replace('.', '\\.')
        return `
    RewriteCond %{HTTP_HOST} ^(www\\.)?${from} [NC]
    RewriteRule ^(.*)$ %{ENV:PROTO}://${to}/$1 [L,R=301,NC]
        `
    }
    if (typeof rd === 'string') return rd
}

const setRewrites = (content, redirects) => {
    if (!redirects || redirects.length === 0) return content
    const rd = fp.map(pattern, redirects).join('\n')
    return content.replace('### CUSTOM-REWRITES ###', rd)
}

module.exports = setRewrites