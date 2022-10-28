const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//method return the system uptimein seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    relese: os.release(),
    totlaMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)

