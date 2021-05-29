let path=require("path");
// let stoping=setInterval(()=>{
//     console.log("running");
// },1000)
// setTimeout(()=>{
//     clearInterval(stoping);
// },5000)
let fs=require("fs");
// console.log(fs);
// fs.mkdir(path.join(__dirname,"./newfolder"),{},(err)=>{
//     if(err)throw err;
// })
// fs.mkdir(path.join(__dirname,"./newfolder/newfolder2"),{},(err)=>{
//     if(err) throw err;
// })
// fs.mkdir(path.join(__dirname,"./newfolder/newfolder2/helo.js"),{},(err)=>{
//     if(err) throw err;
// })
// fs.rmdir(path.join(__dirname,"./newfolder"),{recursive:true},()=>{})
// fs.writeFile(path.join(__dirname,"/","file.txt"),"name:thanzeer salim",()=>{})
// const user=" sisira mol";
// fs.appendFile(path.join(__dirname,"file.txt"),`\n \n name: ${user}`,()=>{})
// fs.readFile(path.join(__dirname,"/","file.txt"),"utf8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
// let eventemitter=require("events");
// let emiter= new eventemitter;
// emiter.on("messege",(data)=>{

//     console.log(data.textmessege);
//     })
// emiter.emit("messege",{textmessege:"hello welcome back"});
const http=require("http");
http.createServer((req,res)=>{
    res.write("browser working");
    res.end();
}).listen(3000,()=>{
    console.log("working fine");
})