

const http=require('http');
const data = require('./data');

http.createServer( ( req,resp)=>{
 resp.writeHead(200, {'content-type': 'application/json'});
 resp.write(JSON.stringify(data));
 resp.end();
}).listen(3002);





const fs=require('fs');

const input=process.argv;
console.log(input);

if(input[2]=='add'){
 fs.writeFileSync(input[3],input[4])
}else if(input[2]=='remove'){
 fs.unlinkSync(input[3])
}else{
 console.log("invalid input");
}
-->



<!-- 
const fs= require('fs');
const path=require('path');

const dirpath=path.join(__dirname,'files');

for(i=0; i<5; i++){
fs.writeFileSync("hello"+i+".txt", "a sample text file");
}
