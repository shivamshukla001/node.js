const fs=require('fs');
const path =require('path');
const dirpath= path.join(__dirname,'crud');
const filepath=`${dirpath}/apple.txt`;

//write
fs.writeFileSync(filepath, 'this is a sample page');

//read
//utf8 and tostring() noth method is used to convert buffer data into redeable data
// fs.readFile(filepath, 'utf8',(err, item)=>{
//     console.log(item);
// });

//update
// fs.appendFile(filepath,' the file naem is crud.txt', (err)=>{
// if(!err) console.log("file is updated");
// })

//rename
// fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
//     if(!err)console.log('file name is changed to fruit.txt');
// })


//delit
fs.unlinkSync(`${dirpath}/apple.txt`)
