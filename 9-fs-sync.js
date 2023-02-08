const {readFileSync,writeFileSync, write} = require('fs');
console.log("start")
const first  = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log("started second")
writeFileSync('./content/result-sync.txt','here is the resourceUsage')
console.log("done tasks")