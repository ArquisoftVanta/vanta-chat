const http = require('http');
const express = require("express");
const io = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');

//Connect DB
dotenv.config()
const DB  = require("./config/db");
const socketConnection  = require("./config/sockets");
const socketFunctionality = require("./config/socketFuncs.js")

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

//Serving Express Aplication
app = express();
server = http.Server(app);
app.use(express.json());;

//Connecting Socket Server
socket = io(server);
socket.use(socketConnection);
socket.on("connection", socketFunctionality)


//Gets API Routes from conversation
const convRouter = require("./routes/convRoutes");
app.use("/conv", convRouter);


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

server.listen(port, host, () => {
    console.log("Server connected on" + host + ":" + port)
})