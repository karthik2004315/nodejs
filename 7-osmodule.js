const os = require('os');

// info
console.log(os.userInfo());
// system uptime
console.log('the system is uptime for ',os.uptime());
// 

const currentOs={
    name: os.type(),
    release:os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOs);