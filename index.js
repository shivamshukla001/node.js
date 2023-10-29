const express=require('express');

const app=express();

const reqfilter=(req,res,next)=>{
 if(!req.query.age){
     res.send("please enter your age");

 }
 else if(req.res.age<18){
   res.send("your age must be 18+ to visit this site")
 }else{
   next();
 }
}
app.use(reqfilter);


app.get('', (req,resp)=>{
   resp.send("welcome to the home page")
})
app.get('/about',(req,resp)=>{
   resp.send("welcome to the about page")
})
app.listen(2040);
