const express = require('express');

const app = express();

app.get("/", function(req, res){
    res.send("index route is working")
})

const port = process.env.PORT || 8080;
app.listen(port);
console.log("Express started listenining on port ", port)