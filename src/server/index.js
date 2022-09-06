const cors=require("cors");
const bodyParser=require("body-parser");
const express=require("express");
const app=express();
const mockApi=require("./mockApi");
const path=require("path");
require("dotenv").config();
const {default :axios}=require("axios");
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

app.get('/test', function(req,res){
    res.json(mockApi);
})


app.post('/', function(req,res) {
    
    const url=req.body.url;
    console.log("URL: ",url);

    axios.post(`
    https://api.meaningcloud.com/sentiment-2.1?key=${
    process.env.API_KEY}&url=${url}&lang=en`).then(function(response){

        let result= response.data;
        res.send({
            agreement: result.agreement,
            confidence: result.confidence,
            irony: result.irony,
            model: result.model,
            score_tag: result.score_tag
        })

    });
    
})



