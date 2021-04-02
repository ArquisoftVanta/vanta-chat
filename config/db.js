const mongoose = require('mongoose')
const dbURL = process.env.DB_URL || "mongodb://localhost:27017/Chat"

const connect = mongoose.connect(dbURL,  {useNewUrlParser:true, useUnifiedTopology:true}, () => { 
    console.log("mongodb connected at: " + dbURL)
})

module.exports = connect