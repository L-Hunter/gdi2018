const fs = require('fs');


fs.readFile('frankenstein.txt', 'utf8', function(err, data) {

    var count = 0;
    var wordsArray = data.split(' ');
    for (var i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].includes("monster")) {
            count++;
        }
    }
    console.log(count)

});
//const data = fs.readFileSync('frankenstein.txt', 'utf8');
