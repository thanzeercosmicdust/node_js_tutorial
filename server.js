// var http=require("http")
// http.createServer((rq,res)=>{
//     res.write("this is node js working")
//     res.end()
// }).listen(3001)

// var http=require("http")
// var fs=require("fs")
// http.createServer((req,res)=>{
//     fs.readFile("serverfile.html",(err,data)=>{
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         res.end()
// })


// }).listen(3001)


//server creation.......................................................................................
var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    fs.readFile("serverfile.html",(err,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    })
}).listen(3001)