import { passwordRegex as passwordRegexREGEX } from '../constants'
import { emailRegex as emailRegexREGEX } from '../constants'
import { usernameRegex as usernameRegexREGEX } from '../constants'
import { addressRegex as addressRegexREGEX } from '../constants'
import { descriptionRegex as descriptionRegexREGEX } from '../constants'
import { aboutMeRegex as aboutMeRegexRegexREGEX } from '../constants'

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

export const validateAddressRegexRules = (address) => {
  const addressRegex = new RegExp(addressRegexREGEX)
  if (addressRegex.test(address)) return true
  return false
}

export const validateDescriptionRules = (profileDescription) => {
  const descriptionRegex = new RegExp(descriptionRegexREGEX)
  if (descriptionRegex.test(profileDescription)) return true
  return false
}

export const validateAboutMeRules = (about) => {
  const aboutMeRegex = new RegExp(aboutMeRegexRegexREGEX)
  if (aboutMeRegex.test(about)) return true
  return false
}
