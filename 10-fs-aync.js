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

/*  here we can profvie other encodings as well like for example
    1. 'ascii'  :  Interpret the file contents as ASCII-encoded text.
    2. 'utf16le':  Interpret the file contents as 16-bit Unicode text in little-endian byte order.
    3. 'latin1' :  Interpret the file contents as ISO-8859-1 (also known as Latin-1) encoded text.