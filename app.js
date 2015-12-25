
var questions = ["What is your name", "What is your hobby", "What is your preferred programming language"];
var answers = [];


function grab(flag){
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index + 1];
}

setTimeout(function () {
    console.log(' ');
},  000);


function ask(i){
    process.stdout.write('\n\n\n\n ' + questions[i]);
    process.stdout.write('   <   ');
}

process.stdin.on('data', function (data) {
    //process.stdout.write('\n' + data.toString().trim() + '\n\n');
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function () {
    process.stdout.write('\n\n\n');
    process.stdout.write('Go ' + answers[1] + ', ' + answers[0] + ', you can finish writing ' + answers[2] + ' later');
    process.stdout.write('\n\n\n');
});




ask(0);
//process.stdout.write("just a test");
//process.stdout.write("hell0 ");
//process.stdout.write("world \n\n\n\n");

//var path = require("path");

//var greeting = grab('--greeting');
//var user = grab('--user');
