const http=require('http');

const port=3025;
const HOSTNAME='localhost';
const server=http.createServer( (req,res)=>{
    if(req.url=='/'){
        res.statusCode=200
        res.setHeader('Content-type','text/plain');
        res.end('welcome to a node js server made by Shivam shukla')
    } else if(req.url=='/product'){
        res.statusCode=200
        res.setHeader('Content-type','application/json');
       res.end(JSON.stringify({ productname: 'product 1'}));
    }
    else if(req.url=='/about'){
        res.statusCode=200
        res.setHeader('Content-type','text/plain');
        res.end('about page')
    }else if(req.url=='/contact'){
        res.statusCode=200
        res.setHeader('Content-type','text/plain');
        res.end('contact page')
    }else{
        res.statusCode=500
        res.setHeader('Content-type','text/plain');
        res.end('server error!')
    }
});

server.listen( port,()=>{
   console.log(`server is runing in ${HOSTNAME}:${port}`);
});