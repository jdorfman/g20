var cp = require("child_process");

cp.exec("node ./index.js |wc |md5", function (err, stdout, stderr) {
  var trimStdOut = stdout.trim()
    if (trimStdOut !== 'c1736c9033135fc399760d2740eb3a7f') {
      console.log('Fail: The current g20 hash doesn\'t match the correct one.')
      console.log('Debug: ' + trimStdOut)
      process.exit(1)
    } else {
      console.log('Pass')
    }
});
