export class Form {
    tagName;
    attribute;
    attributeContent;
    elementContent;
    constructor() {
        this.tagName = document.getElementById('tagName').value;
        this.attribute = document.getElementById('attribute').value;
        this.attributeContent = document.getElementById('attributeContent').value;
        this.elementContent = document.getElementById('elementContent').value;
    }
}