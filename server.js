const cors=require("cors");
const bodyParser=require("body-parser");
const express=require("express");
const app=express();
const path=require("path");
const {default :axios}=require("axios");
require("dotenv").config();
const portNum=process.env.PORT;
let resData={};

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.resolve("./") + "/dist"))


app.listen(portNum,()=>{ console.log(`Server listening on port ${portNum}!`) });


app.get('/', function(req,res){
    res.sendFile('/dist/index.html' , { root : __dirname});
})



const api=async function(req,res){
    const url=req.body.url;
    console.log("URL: ",url);
    let response =await axios.post(`
    https://api.meaningcloud.com/sentiment-2.1?key=${
    process.env.API_KEY}&url=${url}&lang=en`);
    let result= response.data;
    res.send({
        agreement: result.agreement,
        confidence: result.confidence,
        irony: result.irony,
        model: result.model,
        score_tag: result.score_tag
    })
}

app.post('/', api)



