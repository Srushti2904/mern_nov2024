var express = require("express");
const mongoose =  require("mongoose");

var app=express();

var mongoDB='mongodb://127.0.0.1/MyDB';
mongoose.connect(mongoDB).then((data)=>{
    console.log("DB Connnection is successful..");
})
var db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB Connection error'));
app.listen(8001,function(req,res){
    console.log("Server is listening at http://localhost:8001");
})
//define the schema
var Schema = mongoose.Schema;
var RestaurantSchema=new Schema({

    "id":Number,
    "name":String,
    "type":String,
    "location":String,
    "Rating":Number,
    "topfood":String
});
const RestaurantTable=mongoose.model('restaurant',RestaurantSchema);

// Get all the employees..
app.get("/getAllRestaurants", function (req, res) {

    RestaurantTable.find().then((data) => {
        console.log(data);
        res.status(200).send(data);
    }).catch((err) => {
        res.status(400).send(err);
    });

});
//1.connecting mongoose with mongodb.
//2.define the schema structure of the collection/table of mongodb
//3.define teh get operation and display the  result in the browser.
