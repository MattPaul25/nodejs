var waitTime = 3000;
var currentTime = 0;
var waitInterval = 10;
var percentWaiting = 0;

console.log("wait for it!....")

function writeWaitingPercent(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write('waiting ' + p + '%');
}

var interval = setInterval(function () {
    currentTime += waitInterval;
    //   console.log(currentTime + ' seconds');
    percentWaiting = Math.floor((currentTime / waitTime) * 100);
    writeWaitingPercent(percentWaiting);
}, waitInterval);

setTimeout(function () {
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log('\n\nDone!');
}, waitTime);

process.stdout.write('\n\n');
writeWaitingPercent(percentWaiting); 