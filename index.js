const express=require('express');

const app=express();

app.get('', (req,resp)=>{
    console.log("data is sent by browser=>>>>>",req.query);
    resp.send("hello this is a home page");
})

app.get('/about', (req,resp)=>{
    resp.send("hello this is a about page");
})

app.get('/help', (req,resp)=>{
    resp.send("hello this is a help page");
})

app.listen(5200);