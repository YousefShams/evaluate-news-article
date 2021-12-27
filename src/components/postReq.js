export function postReq (urlVal) {

    const resultsElement=document.getElementById("results");

    fetch("http://localhost:8070/",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        credentials:"same-origin",
        body: JSON.stringify({url : urlVal})
    }).then((res)=>{
        console.log("Success")
        return res.json();
    }).then((data)=>{

        resultsElement.innerText=`Agreement: ${data.agreement}
        Confidence: ${data.confidence}
        Irony: ${data.irony}
        Model: ${data.model}
        Score Tag: ${data.score_tag}`;
        console.log(data);

    }).catch(()=>{console.log("Error")})

}