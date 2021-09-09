const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log (os.cpus());
console.log('Mem dispo: (Go) ', os.freemem()/1024/1024/1024);
console.log('Mem totale: (Go) ', os.totalmem()/1024/1024/1024);
console.log('Uptime: (en heures)', os.uptime()/60/60);
