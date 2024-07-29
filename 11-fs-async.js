const {readFile, writeFile} = require("fs");

console.log("start")
readFile("./content/first.txt", "utf8",(err,result)=>{
    if(err){
       return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err,result)=>{
        if(err){
            return
        }
        const second = result;
        writeFile("./content/result-async.txt",
            `thats the result of our to files: ${first} and ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log("this is the end of the task");
        });
    })
})
console.log("starting the next 1")