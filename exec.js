var exec = require("child_process").exec;
//exec allows me to use the cmd prompt in order to execute shell like processes
exec("explorer .");

exec("node -v", function (err, stdout) {
    if (err) {
        throw err;
    }

    console.log("listing finished");
    console.log(stdout);
});