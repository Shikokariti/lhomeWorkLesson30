import { Form } from "./form.js";
import { RenderHTML } from "./renderHTML.js";

let trigger = document.getElementById('createElement');
trigger.addEventListener('click',()=>{
    let x = new Form();
    let y = new RenderHTML(x.tagName,x.attribute,x.attributeContent,x.elementContent);
});