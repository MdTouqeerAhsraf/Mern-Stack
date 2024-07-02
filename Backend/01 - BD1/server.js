// step1: create a folder 
// step2: move into that folder 
// step3: npm init -y
// step4: open folder using vdcode
// step5: npm i express
// step6 : create server.js

// Server Instantiate
const express = require('express');
const app = express();


// used to parse re q.body in express -> Put or Post
const bodyParser = require('body-parser');

// Specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());


// activate the server on 3000 port
app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
});


// Routes
app.get('/', (request,responce) => {
    responce.send("hello jee, kaise ho saree");
})

app.post('/api/cars', (request,responce) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    responce.send("Car Submitted Successfully.")
})




// Connect node.js to mongodb using mongoos
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an error")} ); 