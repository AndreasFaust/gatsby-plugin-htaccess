const ownerMatch = `
    Options +SymLinksIfOwnerMatch
`

const SymLinksIfOwnerMatch = (content, SymLinksIfOwnerMatch) =>
  SymLinksIfOwnerMatch ? content.replace('### SYMLINKS-IF-OWNER-MATCH ###', ownerMatch) : content

module.exports = SymLinksIfOwnerMatch
