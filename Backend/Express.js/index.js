const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
app.use("/api/v1",router);
const router = require("./UserRouters")
app.use(bodyParser.urlencoded({ extended: false}));
app.get(express.json());
// app.get("/", (req,res) => {
//     res.send("<h1>Hello World</>");
// });

// app.get("/", (req,res) => {
//     // console.log(path.join(__dirname + "./index.html"));
//     res.sendFile(path.join(__dirname + "index.html"));
// });

// app.get("/api/v1/userdata", (req, res) => {
//     res.json({
//         name: "Touqeer",
//         email: "touqeer@gmail.com",
//         password :"hewxwed"
//     });
// });

app.getI("/", (req,res) => {
    res.sendFile(path.join(__dirname+"/index.html"));
})

app.post("/api/v1/register", (req, res) => {
    

    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password

    res.join({
        success: true,
        // name:userName,
        // email:userEmail,
        // password: userPassword,
    }); 
});
// app.get("/about", (req,res) => {
//     res.send("<h1>ABOUT PAGE</>");
// });

// app.get("/contact", (req,res) => {
//     res.send("<h1>CONTACT PAGE</>");
// });

// // app.post("/",(req,res)=> {
//     app.post("/api/v1/login",(req,res)=> {
//         res.send(`<h1>Done Mr.${req.body.name}</h1> <h2>Your Email is ${req.body.email}</h2> <h3>Your Password is ${res.body.passsword}</h3>`);
//     // const userName = req.body.name;
//     // console.log("name");
//     console.log(req.body);
// });

app.listen(port, () => {
    console.log(`server is working on port: ${port}`);
});

// GET , POST, PUT, DELETE

// REST API-> REST (respresentational state transer ) is an api that defines a set of functions that programmers can use to send request and recieve responnces using the HTTP protocol mothods such as GET and POST
