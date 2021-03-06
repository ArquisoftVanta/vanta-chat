const http = require("http");
const express = require("express");
const io = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");

//Connect DB
dotenv.config();
const DB = require("./config/db");
const socketConnection = require("./config/sockets");
const socketFunctionality = require("./config/socketFuncs.js");

const port = process.env.PORT || 8080;

//Serving Express Aplication
app = express();
app.use(express.json());
app.use(cors());
server = http.Server(app);

//Connecting Socket Server
socket = io(server, { cors: { origin: "*" } });
socket.use(socketConnection);
socket.on("connection", socketFunctionality);

//Gets API Routes from conversation
const convRouter = require("./routes/convRoutes");
app.use("/conv", convRouter);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () => {
  console.log("Server connected on" + port);
});
