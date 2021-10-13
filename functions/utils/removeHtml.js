const removeHtml = value => {
   return value && value.toString().replace(/<[^>]+>/g, '')
}

module.exports = removeHtml
