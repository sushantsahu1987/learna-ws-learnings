const express = require('express');
const app = express();

app.get("/",(req, resp)=> {
    resp.send({respose: "hello world"});
})

app.listen(3001, ()=> {
    console.log("server running on port ")
})