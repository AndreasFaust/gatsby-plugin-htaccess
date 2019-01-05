const setRewriteBase = (content, RewriteBase) => {
    if (!RewriteBase) return content
    switch (typeof RewriteBase) {
        case 'boolean':
            return content.replace('### REWRITE-BASE ###', 'RewriteBase /')
        case 'string':
            return content.replace('### REWRITE-BASE ###', `RewriteBase ${RewriteBase}`)
        default: return content
    }
}

module.exports = setRewriteBase