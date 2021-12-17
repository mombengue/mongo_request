const mongoose = require("mongoose");

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bootcamp");
        console.log("connected to the DataBase");
    } 
    catch (error) {
        console.log(error.message);
    }
  
};

module.exports = {
    dbconnect
}