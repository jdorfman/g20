require('copy-paste').global()
var chalk = require('chalk')
var generatePassword = require('password-generator')

copy(generatePassword(19, false))
console.log(chalk.bgGreen(paste()) + " has been copied to your clipboard.")
