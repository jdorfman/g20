var cp = require("child_process");

var testCommand = "node ./index.js | wc | awk '{ print $1$2$3 }' | md5sum | awk '{print $1}'";

if (process.platform === 'darwin') {
    testCommand = "node ./index.js | wc | awk '{ print $1$2$3 }' | md5";
} else if (process.platform === "win32") {
    console.log('Warning: Testing on Windows is not currently supported.');
    console.log('Warning: Test SKIPPED!');
    process.exit(1);
}

cp.exec(testCommand, function (err, stdout, stderr) {
    var trimStdout = stdout.trim();

    if (trimStdout !== '5d1461cf239ddb11e34c46d0498cd8b7') {
      console.log('Fail: The current g20 hash doesn\'t match the correct one.');
      console.log('Debug: ' + trimStdOut);
      process.exit(1);
    } else {
      console.log('Pass');
    }
});
