const express= require("express");
const app=express();
const path = require("path");
const index_path=path.join(__dirname,'/css')
// const index_path=path.join(__dirname,'im')
// console.log(index_path);
const http = require("http").createServer(app);
// const server=http.createServer(app);
http.listen(8000,()=>{
    console.log("listen from port");
})
app.use(express.static(index_path))
app.get("/",(req,res)=>{
    // res.write("index")
    res.sendFile(__dirname+"/index.html");
    // res.end();

})
app.use(express.static(index_path))
app.get("*",(req,res)=>{
  res.sendFile(__dirname+"/404error.html")
})
const io = require("socket.io")(http);
io.on("connection",(socket)=>{
//  socket.on("user-join",(userjoinName)=>{
  //  console.log(userjoinName);
  //  socket.broadcast.emit("user-join",joinuser);
//  })
  socket.on("massage",(msg)=>{
      // console.log(msg);
    //   console.log("jointhe");
      socket.broadcast.emit("massage",msg);
    //   socket.broadcast.emit("join",joinmsg);
  })
})