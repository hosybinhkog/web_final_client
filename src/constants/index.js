export const passwordRegex =
  /(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~]{9,}$/
export const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
export const usernameRegex = /^[a-zA-Z0-9_]{5,}$/

// const checkEmail = document.getElementById('email').value
//   const checkPassword = document.getElementById('password').value

//   const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
//   if (!emailRegex.test(checkEmail)) {
//     toast.error('Email không hợp lệ')
//     return false
//   }

//   if (checkPassword.length < 8) {
//     toast.error('Password ít nhất 8 ký tự')
//     return false
//   }
