const http=require('http');
const { Server } = require('https');

const server=http.createServer( (req,res)=>{
  if(req.url=='/'){
    res.write('<h1>hello node js -- Shivamshukla</h>');
  }
  res.end();
});

server.listen(1203);

console.log("this server is running by shivam Shukla");