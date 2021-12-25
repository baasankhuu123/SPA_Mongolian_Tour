import Component from "../components/component.js";
export default class Gallery extends Component{
    constructor(objData){
        super();
        this.data = objData;
    }
    GRender(galleryd){
        return this.html`
        <div class="picture col-md-3">
            <a href="#"><img src="${galleryd.image_url}" alt="${galleryd.title}"></a>
            <div class="title">
                <h5>${galleryd.id}</h5>
                <h3>${galleryd.title}</h3>
            </div>
        </div>
        `
    }
    Render(){
        let A = "";
            let B = this.data.Articles;
            for(let c of B){
                A+=this.GRender(c);
            }
        return this.html`
        <div class="gallery" id="gallery">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                        <div class="container">
                            <img src="${this.data.image_url}" alt="${this.data.title}">
                            <h2 class="h2_title">${this.data.title}</h2>
                            <div class="categories">
                               <ul>
                                   <li><h5>All</h5></li>
                                   <li><h5>Horse trekking</h5></li>
                                   <li><h5>people</h5></li>
                                   <li><h5>horses</h5></li>
                                   <li><h5>camping</h5></li>
                                   <li><h5>landscape</h5></li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                    ${A}
                    </div>
                </div>
            </div>   
        </div>
        `
    }
}