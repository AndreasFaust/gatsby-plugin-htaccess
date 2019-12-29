const followSym = `
    Options +FollowSymLinks
`

const setDisallowSymLinks = (content, DisallowSymLinks) =>
  DisallowSymLinks ? content : content.replace('### FOLLOW-SYMLINKS ###', followSym)

module.exports = setDisallowSymLinks
