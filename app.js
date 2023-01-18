const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: false
}));
app.set("view engine", ".hbs");


app.get("/", function(req, res){
    res.render("home.hbs");
})

const port = process.env.PORT || 8080;
app.listen(port);
console.log("Express started listenining on port ", port)