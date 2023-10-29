const express = require("express");
const path=require('path');


const app = express();

const dirpath=path.join(__dirname,'public');

app.set('view engine', 'ejs');//template engine

app.get('', (req,resp)=>{
   resp.sendFile(`${dirpath}/index.html`)
})

app.get('/profile', (req,resp)=>{
    const user={
        name:'shivam SHukla',
        email: "exaple.com",
        city:'bikaner'
    }
    resp.render('profile',{user})
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



app.listen(5300);
