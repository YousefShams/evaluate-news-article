const cors=require("cors");
const bodyParser=require("body-parser");
const express=require("express");
const app=express();
const path=require("path");
const api= require("./Api.js")
require("dotenv").config();
const portNum=process.env.PORT;
let resData={};


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("dist"))

app.listen(portNum,()=>{ console.log(`Server listening on port ${portNum}!`) });


app.get('/', function(req,res){
    res.sendFile('dist/index.html');
})




app.post('/', api)



