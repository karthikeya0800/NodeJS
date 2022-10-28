const {readFile, writeFile} = require('fs')

console.log("Start")
readFile('./content/first.txt','utf8',(err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
        const second=result
        writeFile('./content/result-async.txt',
        `Here is the result : ${first},${second}`,
        (err,result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log('Done with the task')
        })
    })
})
console.log('Starting Next task');

// The moment the task is started, it off loads it and starts the next task.
// This is the reason why it is called async operation.
// It decreases the server load and serves many customers simultanesously.