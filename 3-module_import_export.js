// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//import names from 3.1-names.js
//import function from 3.2-function.js
const names = require('./3.1-names')
const sayHi = require('./3.2-function')
const data = require('./3.3-another_export_method')
console.log(data)

sayHi("karthik")
sayHi(names.john)
sayHi(names.peter)