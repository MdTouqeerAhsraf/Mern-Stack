// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Touqeer'
    }
    ,
    {
        No : 2,
        Name : 'Ashraf'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Touqeer "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Touqeer");
console.log(obj);