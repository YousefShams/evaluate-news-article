export function FormSubmit(e) {
    e.preventDefault();
    const inputElement=document.getElementById("urlInput");
    Client.postReq(inputElement.value);
    console.log("**** Form Submitted ****");
}


