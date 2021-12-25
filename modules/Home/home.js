import Component from "../components/component.js";
export default class Home extends Component{
    constructor(objData){
        super();
        this.data = objData;
    }
    Round(rounds){
        return this.html`
        <div class="swiper-slide" style="background-image:url("SPA_Mongolian_Tour/${rounds.url})">
            <div class="overlay"></div>
            <div class="caption container">
                <div class="row" style="margin: 0; padding: 0;">
                    <div class="col-md-12 col-sm-12">
                        <div class="container">
                            <div class="caption-text">
                                <h2>${rounds.title}</h2>
                                <h5>${rounds.Description}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    Render(){
        let A="";
        const title = this.data.Title;
        for(let b of title){
            A+=this.Round(b)
          }
        return this.html`
        <div class="home_bg">
            <div class="bg">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        ${A}
                    </div>
                </div>
            </div>
        </div>
        `
    }
}
