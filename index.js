#!/usr/bin/env node
const clipboardy = require('clipboardy')
var chalk = require('chalk')
var generatePassword = require('password-generator')

clipboardy.writeSync(generatePassword(19, false))
console.log("\r\n" + chalk.bgGreen(clipboardy.readSync()) + " has been copied to your clipboard." + "\r\n")
