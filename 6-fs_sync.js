const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log("Start")

//this will overwrite the content in the file
writeFileSync('./content/result-sync.text',
`Here is the result : ${first},${second}`) 

//this will append to the content in the file
writeFileSync(
    './content/result-sync.text',
    `Here is the result : ${first},${second}`,
    {flag:'a'}
) 

console.log('Done with the task')
console.log('Starting the next task')

// The tasks occur in step by step manner.
// Other users had to wait until one complets the entire task.
// Takes lot of time and cannot serve many customers simultaneously.