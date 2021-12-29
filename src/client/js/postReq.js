export function postReq (urlVal) {

    const resultsElement=document.getElementById("results");
    console.log(urlVal);

    fetch("http://localhost:8090/",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        credentials:"same-origin",
        body: JSON.stringify({url : urlVal})
    }).then((res)=>{
        console.log("Success")
        return res.json();
    }).then((data)=>{
        if(Object.keys(data).length>0) {
        resultsElement.innerText=`Agreement: ${data.agreement}
        Confidence: ${data.confidence}
        Irony: ${data.irony}
        Model: ${data.model}
        Score Tag: ${data.score_tag}`;
        console.log(data);
        }
        else {
            resultsElement.innerHTML=`<span style="color:red;">Please Enter An Actual URL</span>`;
        }

    }).catch((e)=>{console.log(e.message)})

}