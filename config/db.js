const mongoose = require('mongoose')
const dbURL = process.env.DB_URL


const connect = mongoose.connect(dbURL,  {useNewUrlParser:true, useUnifiedTopology:true}, () => { 
    console.log("mongodb connected at: MongoDBAtlas ")
})

module.exports = connect