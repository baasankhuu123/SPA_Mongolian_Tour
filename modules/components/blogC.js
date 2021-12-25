import html from "./utils.js";

class MyBlog extends HTMLElement {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = html`
            
            <img src="/images/blog${this.getAttribute("id")}.jpg" alt="${this.getAttribute("id")}">
        `
    }
}

        
customElements.define("my-blog", MyBlog);