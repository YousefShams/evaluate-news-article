export function FormChange() {
    
        const inputElement=document.getElementById("urlInput");
        console.log("Changed");
        const btnElement=document.getElementById("btn");
        const urlText=inputElement.value;
        let regexMatch=null;
        let wwwIndex =urlText.indexOf("www.");

        if (wwwIndex!=-1) {       
        let newIndex =urlText.indexOf(".",wwwIndex+4);
        if(newIndex!=-1)
        regexMatch=true;
        else
        regexMatch=false
        }

        else 
        regexMatch=true;
        if(regexMatch==true)
        regexMatch=urlText.match(/(http(s?)(:\/\/))?((www\.)?)([a-zA-z0-9-_])+(\.(\w){3})(\/?)([a-zA-z0-9-_]+\/?)*/gim);

        if(regexMatch!=null){
            if(regexMatch[0]==urlText) {
                inputElement.style.borderBottom="6px solid lightgreen";
                btnElement.disabled=false;
            }

            else {
                inputElement.style.borderBottom="6px solid red";
                btnElement.disabled=true;
            }
        }

            else {
                inputElement.style.borderBottom="6px solid red";
                btnElement.disabled=true;
            }
}



