export class RenderHTML {
    tagName;
    attribute;
    attributeContent;
    elementContent;
    constructor(tagNameInput,attributeInput,attributeContentInput,elementContentInput) {
        this.tagName = tagNameInput;
        this.attribute = attributeInput;
        this.attributeContent = attributeContentInput;
        this.elementContent = elementContentInput;
        this.render();
    }
    render(){
        let element = document.createElement(this.tagName);
        let content = document.createTextNode(this.elementContent);
        element.appendChild(content);
        document.body.appendChild(element);
        element.setAttribute(this.attribute,this.attributeContent);
    }
}
