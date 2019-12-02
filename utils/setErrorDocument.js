const setErrorDocument = (content, error) => {
    return error
        ? content.replace('### ERRORDOCUMENT ###', `
    ${error}
        `)
        : content.replace('### ERRORDOCUMENT ###', 'ErrorDocument 404 /404/index.html')
}

module.exports = setErrorDocument