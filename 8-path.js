const path = require('path');

console.log(path.sep);

//

const newpath = path.join('/content/', 'subfolder', 'test.txt');
console.log(newpath);

//
const base = path.basename(newpath);
console.log(base);

// 

console.log(path.resolve(__filename));