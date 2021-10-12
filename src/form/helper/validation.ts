// Regex
export const phoneRegex = /\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})/
export const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W\p{P}\p{S}]{8,}/

// Invalid messages
export const invalidEmailMsg = 'Must be a valid email address'
export const invalidPasswordMsg = 'Must contain a capital letter, lowercase letter, and number'