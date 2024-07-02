const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> {
    console.log("Connect to MongoDB successfully")
}).catch((err)=> {
    console.log(err)
})

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student = new mongoose.model("Student",student);

const adder = async ()=> {
    // const ss = await Student.create({
    //     // name:"Ashraf",
    //     // workout:true,
    //     // height:6
        
    // })

    // const ss = await Student.find({height:{$eq:6}});
    // const ss = await Student.find();
const ss = await Student.create({name:"Touqeer",workout:false,height:5})

    console.log(ss);    

}

adder();