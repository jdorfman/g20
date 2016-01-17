var cp = require("child_process");

cp.exec("node ./index.js", function(err, stdout, stderr) {

function countWords(str) {

  var count = 0;
  for (var i = 0; i <= str.length; i++) {
    if (str.charAt(i) == " ") {
      count++;
    }
  }
  return count + 1;
}

var stdOutWordCount = countWords(stdout);

if (stdOutWordCount !== 7) {
  console.log('Fail: There are not enough strings in stdout.')
  console.log('Value should be: 7' + ' \nValue is: ' + stdOutWordCount)
  process.exit(1)
} else {
  console.log('Pass')
}

});
