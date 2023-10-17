
const http=require('http');

const option={
    hostname: 'instafakegram.com',
    path: '/product/5',
    method: 'GET'
};

const apiReq = http.request(option, (apiRes) =>{
   apiRes.on( "data", (data) => {
   console.log(data).toString();
    
   });

   
});

apiReq.on(  "error",() => {
    console.log(e);
});

apiReq.end();


