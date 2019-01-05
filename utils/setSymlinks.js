const followSym = `
    Options +FollowSymlinks
`
const ownerMatch = `
    Options +SymLinksIfOwnerMatch
`

const setWWW = (content, SymLinksIfOwnerMatch) => SymLinksIfOwnerMatch
    ? content.replace('### SYMLINKS-IF-OWNER-MATCH ###', ownerMatch)
    : content.replace('### FOLLOW-SYMLINKS ###', followSym)

module.exports = setWWW