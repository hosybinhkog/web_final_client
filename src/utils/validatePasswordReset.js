import { passwordRegex as passwordRegexREGEX } from '../constants'
import { emailRegex as emailRegexREGEX } from '../constants'
import { usernameRegex as usernameRegexREGEX } from '../constants'

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

export const validateEmailRules = (email) => {
  const emailRegex = new RegExp(emailRegexREGEX)
  if (emailRegex.test(email)) return true
  return false
}

export const validateUsernameRules = (username) => {
  const usernameRegex = new RegExp(usernameRegexREGEX)
  if (usernameRegex.test(username)) return true
  return false
}
