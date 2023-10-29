const express=require('express');
const reqfilter=require('./middleware');
const app=express();

const route=express.Router();

route.use(reqfilter);



// app.use(reqfilter);


app.get('',(req,res)=>{
   res.send("welcome to the home page")
})
app.get('/about',(req,res)=>{
   res.send("welcome to the about page")
})
route.get('/help',(req,res)=>{
   res.send("welcome to the help page")
})
route.get('/contact',(req,res)=>{
   res.send("welcome to the contact page")
})
app.use('/', route);

app.listen(4300);