const {default :axios}=require("axios");


const api=function(req,res){

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
    
   
}

module.exports=api;
