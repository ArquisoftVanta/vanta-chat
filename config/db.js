const mongoose = require('mongoose')
const dbURL = process.env.DB_URL || "mongodb+srv://<user>:<user>@cluster0.xoq7j.mongodb.net/Chat?retryWrites=true&w=majority"

const connect = mongoose.connect(dbURL,  {useNewUrlParser:true, useUnifiedTopology:true}, () => { 
    console.log("mongodb connected at: " + dbURL)
})

module.exports = connect