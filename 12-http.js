const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("welcome to home nigga")
    }else if(req.url ==="/about"){
        res.end("you are about nigga")
    }

});

server.listen(5001)