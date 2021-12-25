import Component from "../components/component.js";
export default class Blog extends Component{
    constructor(objData){
        super();
        this.data = objData;
    }
    BRender(blog){
        return this.html`
        <div class="type col-md-4">
            <div class="picture">
                <a href="#">
                <my-blog id="${blog.id}"></my-blog>
                </a>
            </div>
            <div class="title">
                <a href="#"><h3>${blog.title}</h3></a>
            </div>
            <div class="caption">
                <p>${blog.Author}</p>
            </div>
            <div class="read_more">
                <a href="#">Read more <i class="mdi mdi-arrow-right"></i></a>
            </div>
        </div>
        `
    }
    Render(){
        let A = "";
            let B = this.data.Articles;
            for(let c of B){
                A+=this.BRender(c);
        }
        return this.html`
        <div class="blog" id="blog">
            <div class="container">
                <div class="row">
                    <div class="title col-md-12">
                        <h2 class="h2_title">${this.data.Title}</h2>
                        <p>${this.data.Description}</p>
                    </div>
                    ${A}
                </div>
            </div>
        </div>
        `
    }
}