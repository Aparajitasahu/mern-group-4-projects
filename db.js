const mongoose = require('mongoose');

exports.dbConn = ()=>{
    const dbURL = "mongodb+srv://khyatimohanty:jincy123@cluster0.5ptcbel.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log("Database Connected");
    }).catch((err)=>console.log(err));
}