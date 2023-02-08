const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
})
readFile('./content/second.txt', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const second = result;
})
writeFile('./content/result-async.txt', 'here is the result of async or asynchronoous file storage',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('done with the task');
})
console.log('remaining execution');