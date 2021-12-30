import "./styles/index.scss";
import {postReq} from "./js/postReq";
import {FormChange} from "./js/FormChange"
import {FormSubmit} from "./js/FormSubmit"

alert("Welcome!");
document.getElementById("btn").disabled=true;


export {
    FormChange,
    FormSubmit,
    postReq
}