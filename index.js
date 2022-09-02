const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"chatroom"
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res) => {
    res.send("abey sale");
})
app.get("/Login",(req,res) => {
    res.send("aao aao");
})
app.get("/Register",(req,res) => {
    res.send("counter number 5 pe hoga registeration");
})

app.listen(port,() => {
    console.log("App started at port number "+ port);
})