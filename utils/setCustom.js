const setCustom = (content, custom) => custom
    ? content.replace('### CUSTOM-RULES ###', custom)
    : content

module.exports = setCustom