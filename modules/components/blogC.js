import html from "./utils.js";

class MyBlog extends HTMLElement {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = html`
            
            <img src="/SPA_Mongolian_Tour/images/blog${this.getAttribute("id")}.jpg" alt="${this.getAttribute("id")}">
        `
    }
}

        
customElements.define("my-blog", MyBlog);
