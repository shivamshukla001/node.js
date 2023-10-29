const express = require("express");

const app = express();

app.get("", (req, resp) => {
  resp.send(`<h1>hello this is a home page</h1>
  <a href="/about">Go to about page </a>
  `);
});

app.get("/about", (req, resp) => {
  resp.send(`
     <input type="text" placeholder="search" value="${req.query.name}"/>
     <button>Click me</button>    
     <a href="/">Go to home page </a>
    `);
});

app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "shivam",
      email: "example.com",
    },
    {
        name: "akash",
        email: "akash.com",
      }
  ]);
});

app.listen(1020);
