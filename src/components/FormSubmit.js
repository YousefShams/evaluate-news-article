export function FormSubmit(e) {
    e.preventDefault();
    const inputElement=document.getElementById("urlInput");
    const btnElement=document.getElementById("btn");
    const urlText=inputElement.value;
    console.log("Clicked")
    const regexMatch=urlText.match(/http(s?)(:\/\/)((www\.)?)([a-zA-z0-9\-_]+)(\.(\w){3})((\/[a-zA-z0-9\-_]+)+)?/gim);
    if(regexMatch!=null){
        if (regexMatch[0]==urlText)
        Client.postReq(inputElement.value);
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


