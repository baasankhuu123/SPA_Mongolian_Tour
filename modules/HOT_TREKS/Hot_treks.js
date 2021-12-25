import Component from "../components/component.js";
export default class HOT_TREKS extends Component{
    constructor(objData){
        super();
        this.data = objData;
    }
    HRender(hottreks){
        return this.html`
            <div class="swiper-slide" style="padding:20px">
                <div class="row">
                    <div class="type col-md-12">
                        <div class="picture">
                            <img src="${hottreks.img_url}" alt="${hottreks.title}">
                        </div>
                        <div class="title">
                            <h3>${hottreks.title}</h3>
                        </div>
                        <div class="caption">
                            <p>${hottreks.Description}</p>
                        </div>
                        <div class="read_more">
                            <a href="#">read more<i class="mdi mdi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    Render(){
        let A = "";
        let B = this.data.slide;
        for(let c of B){
            A+=this.HRender(c);
        }
        return this.html`
        <div class="hot_treks" id="h_treks">
            <div class="container">
                <div class="row">
                    <div class="title col-md-12">
                        <img src="images/summer.png" alt="">
                        <h2 class="h2_title">Hot treks</h2>
                        <p>Discover the hidden beauty of nature on horseback</p>
                    </div>
                    <div class="swiper-container">
                        <div class="swiper-wrapper" style="width:25%">
                            ${A}
                        </div>
                        <div class="swiper-button-next">
                            <i class="mdi mdi-arrow-right icon"></i>
                        </div>
                        <div class="swiper-button-prev">
                            <i class="mdi mdi-arrow-left icon"></i>
                        </div>
                      </div>
                </div>
            </div>
        </div>
            `
            
    }
}