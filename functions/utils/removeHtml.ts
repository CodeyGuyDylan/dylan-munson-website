const removeHtml: (value: string) => string = value => {
   return value && value.toString().replace(/<[^>]+>/g, '')
}

export default removeHtml
