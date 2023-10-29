const express = require("express");
const path=require('path');


const app = express();
const dirpath=path.join(__dirname,'public');

app.get('', (req,resp)=>{
   resp.sendFile(`${dirpath}/index.html`)
})
app.get('/help', (req,resp)=>{
    resp.sendFile(`${dirpath}/help.html`)
 })
 app.get('/about', (req,resp)=>{
    resp.sendFile(`${dirpath}/about.html`)
 })
 app.get('*', (req,resp)=>{
    resp.sendFile(`${dirpath}/nopag.html`)
 })



app.listen(4300);
