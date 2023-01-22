require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
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

//step 1: transporter 
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

app.post("/contact", function(req, res, next){
    console.log("contact form posted");
    console.log(req.body);
    const name = req.body.fullname;
    const email = req.body.email;
    const note = req.body.note;
    const subject = req.body.subject;
//step 2:
    const mailOptions = {
        from: "vladzizic@gmail.com",
        to: "vladzizic@gmail.com",
        subject: req.body.subject,
        text: req.body.note,
        html: "<b>Full name</b>" + name + "<b>Email </>" + email + "<b>Message</b>" + note
    }
//step 3
transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log("error sending email");
    }else{
        console.log("Email sent!")
    }
})
})

const port = process.env.PORT || 8080;
app.listen(port);
console.log("Express started listenining on port ", port)