#!/usr/bin/env node
var assert = require('assert')
var exec = require('child_process').execFileSync

// assert(exec('./index.js'))
// console.log('Pass')

function assertCheck() {
  assert(exec('./index.js'))
  var testResult = 'Pass'
  if (testResult != 'Pass') {
    console.log('Fail')
    process.exit(1)
  } else {
    console.log('Pass')
  }
}

assertCheck()
//assert(exec('/usr/bin/env node', ['./index.js']))
