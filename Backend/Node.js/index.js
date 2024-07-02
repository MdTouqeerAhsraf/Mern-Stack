// const a = 400;
// console.log(a);

// const a = {
//     average: (a,b) => {
//         console.log((a + b) / 2);
//     },
//     percent: (a, b) => {
//         console.log((a / b) * 100);
//     },
// };

// a.average(10, 20);

// a.percent(20, 100);


// file based, build In , Third Party

// build In ->
// const fs = require("fs");
// console.log(fs);



// fs.readFile("./sample.txt", "utf-8" , (err, data) => {
//     if (err) {
//         return err;
//     }
//     console.log(data);
// });

// const {readFileSync} = require("fs");

// const fs = require("fs");

// const a = fs.readFileSync("./sample.txt", "utf-8");
// console.log(a);
// console.log("I am first");

// const fs = require("fs");

// const a = "This is made by 6pp";

// fs.writeFile("./sample.txt", a, () => {
//     console.log("Written");
// });
// console.log("I am first");


// const fs = require("fs");

// const a = "This is made by 6 pack programmer";

// fs.writeFileSync("./sample.txt", a);

// console.log("I am first");



// const path = require("path");

// const a = path.dirname(
//     "C:\Users\MD TOUQEER\Desktop\Node.js> "
// )

// const a = path.basename(
//     "C:\Users\MD TOUQEER\Desktop\Node.js> "
// )

// const a = path.extname("./node/index.js");

// const path = require("path");
// b = "/6pp";
// const a = path.join(
//      "C:\Users\MD TOUQEER\Desktop\Node.js> ",
//      b

// );

// console.log(a);




// const os = require("os");

// // console.log(os.freemem());
// // console.log(os.hostname());
// console.log(os.totalmem())



// Third party modules
//  const http = require("http");

// http.

// Pokemon->
// const pokemon = require("pokemon");
// // console.log(pokemon.random());
// console.log(pokemon.all());



// How to create a sever

const http = require("http");
const fs = require("fs");



const PORT= process.env.PORT;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

// console.log(__dirname)


const server = http.createServer((req,res)=>{

    // console.log(req.url);
    // res.end("<h1>Hello world</h1>");

    if (req.url === "/") {
       return res.end(home);
    }

    if (req.url === "/about") {
        return res.end("<h1>ABOUT HOME PAGE</h1>")
    }

    if (req.url === "/contact") {
        return res.end("<h1>CONCACT PAGE</h1>")
    }

    if (req.url === "/service") {
        return res.end("<h1>SERVICE PAGE</h1>")
    } else {
        return res.end("<h1>404 Page Not Found</h1>")
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server is working on http://${hostname}:${PORT})`);
})

