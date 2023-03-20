import { passwordRegex as passwordRegexREGEX } from '../constants'

export const validatePasswrodReset = (passwordReset, confirmPasswordNew) => {
  const passwordRegex = new RegExp(passwordRegexREGEX)

  if (passwordRegex.test(passwordReset)) {
    if (passwordReset === confirmPasswordNew) return true
  }

  return false
}

export const validatePasswordRules = (password) => {
  const passwordRegex = new RegExp(passwordRegexREGEX)
  if (passwordRegex.test(password)) return true
  return false
}
