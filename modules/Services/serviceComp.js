import Component from "../components/component.js";
export default class SERVICES extends Component{
    constructor(objData){
        super();
        this.serveData = objData;
    }   
    PRender(serbices){
        return this.html`
        <div class="type col-md-3">
            <div class="icon">
            <my-service id="${serbices.id}">
            </my-service>
            </div>
            <div class="title">
                <h3>${serbices.Title}</h3>
            </div>
            <div class="caption">
                <p>${serbices.Description}</p>
            </div>
        </div>
        `
    }
    Render(){
            let A = "";
            let B = this.serveData.Articles;
            for(let c of B){
                A+=this.PRender(c);
            }
            return this.html`
            <div class="services" id="services">
                <div class="container">
                    <div class="row">
                        <div class="title col-md-12">
                            <img src="${this.serveData.image_url}" alt="${this.serveData.Title}">
                            <h2 class="h2_title">${this.serveData.Title}</h2>
                            <p>${this.serveData.Description}</p>
                        </div>
                        ${A}
                    </div>
                </div>
            </div>
        `
    }
}