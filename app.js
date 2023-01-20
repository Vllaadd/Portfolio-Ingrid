const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: false
}));
app.set("view engine", ".hbs");


app.get("/", function(req, res){
    res.render("home");
})
app.get("/contact", function(req, res){
    res.render("contact");
})

const port = process.env.PORT || 8080;
app.listen(port);
console.log("Express started listenining on port ", port)