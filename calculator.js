const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// allows to go into route (request.body)
// able to parse the HTTP request
// get the form data
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    // __dirname looks for the file 
    res.sendFile(__dirname + "/index.html");
});

// post request when submitting 
app.post("/", function(req,res) {
    // console.log(req.body.num1);
    // need to set the datatype to Number as it parses as a string
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let result = num1 + num2;


    res.send('Result is: ' + result);
});
// ------------------BMI CALCULATOR------------------------------------
app.get("/bmicalculator", function(req,res){
    // __dirname looks for the file 
    res.sendFile(__dirname + "/bmiCalculator.html");
});

// post request when submitting 
app.post("/bmicalculator", function(req,res) {
    // console.log(req.body.num1);
    // need to set the datatype to Number as it parses as a string
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let BmiResult = weight/(height*height);


    res.send("Your BMI is: " + BmiResult);
});
// ------------------------------------------------------------------------

app.listen(3000, function() {
    console.log("Server 3000");
});