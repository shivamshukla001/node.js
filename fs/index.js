
// //aasyncronus way

const { AsyncLocalStorage } = require('async_hooks');
const fs= require('fs');
const { buffer } = require('stream/consumers');


 console.log("config start");
 fs.readFile( './input.txt', function(err, data){

    if(err){
        console.log('error:',err);
        return err
    }
    console.log(data.toString());
    console.log("config end");
    return data;

});

console.log("other config");




//syncronus
const buf=new Buffer(1024);
fs.open('./input.txt', 'r+', function(err, s){
   if(err){
    console.log("error in opeing file:",err);
   }
   console.log("file is open");

   fs.read(s,buf,0,buf.length,0,function(er, bytes){
      if(er){
        console.log("error is found in reading file",er);
      }
      console.log(bytes);
      console.log(buf.slice(0,bytes).toString());
   })

  
})

///writing to file
fs.writeFile('./input.txt', 'nice to meet you', function(err){
    if(err){
        console.log('failure to write file');
    }else{
        console.log('success to write file');

    }
   })



//appending to file
fs.appendFile( './input.txt','--shivam SHukla', function(err){
    if(err){
        console.log("unsuccesfully appending child");
    }else{
        console.log("succesfully appending child");
      
    }
})

//deelit file

fs.unlink('./input.txt', function(err){
    if(err){
        console.log("unsucess");
    }else{
        console.log("success");
    }
})