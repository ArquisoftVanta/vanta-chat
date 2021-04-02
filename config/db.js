const mongoose = require('mongoose')
const dbURL = process.env.DB_URL || "mongodb+srv://userapp:Ba8xUt88LgiCkdh6@cluster0.xoq7j.mongodb.net/Chat?retryWrites=true&w=majority"

const connect = mongoose.connect(dbURL,  {useNewUrlParser:true, useUnifiedTopology:true}, () => { 
    console.log("mongodb connected at: MongoDBAtlas")
})

module.exports = connect