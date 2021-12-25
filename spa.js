'use strict';

/* jshint esversion: 10 */
import html from "./modules/components/utils.js"
import SERVICES from './modules/Services/serviceComp.js'
import Home from './modules/Home/home.js'
import HOT_TREKS  from "./modules/HOT_TREKS/Hot_treks.js";
import Gallery from "./modules/Gallery/gallery.js";
import Contact from "./modules/Contact/contact.js";
import AboutUs from "./modules/AboutUs/aboutus.js";
import Blog from "./modules/Blog/blog.js";
class MySite{  
    constructor(appID){
        this.appContainerID = appID || "spa";
        this.appData = new Map();
        this.appData.set("/", new Map());
    }
    AddRoute(parentRoute, routeName, data) {
        this.appData.get(parentRoute).set(routeName, data);
    }
    OnRoute(route) {
        //console.log(`${route}`);
        document.getElementById(this.appContainerID).innerHTML = this.appData.get("/").get(route)?.Render() || this.NotRoute();
    }
    NotRoute() {
        return html`<h1 style="color:red;margin:0; padding-top:10%;padding-bottom:10%; text-align:center;background-color:#6c757d">404 not found</h1>`
    };
}
const SPA = new MySite("spa");

//#region About Render
class About{
    constructor(objData){
        this.data = objData;
    }
    Render(){
        return html`
        <div class="about" id="about">
                <div class="container">
                    <div class="row">
                        <div class="picture col-md-4">
                            <img src="${this.data.imageurl}" alt="logo">
                        </div>
                        <div class="about_texture col-md-8">
                            <h2 class="h2_title">${this.data.title}</h2>
                            <p>${this.data.Description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
//#endregion
//#region Popular Render
class POPULAR{
    constructor(objData){
        this.data = objData;
    }
    PRender(populard){
        return html`
        <div class="swiper-slide" style="padding:10px">
            <div class="row">
                <div class="type col-md-12">
                    <div class="picture">
                        <img src="${populard.image_url}" alt="${populard.title}">
                    </div>
                    <div class="title">
                        <h3>${populard.title}</h3>
                        <p>${populard.Description}<a href="#">click here</a></p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    Render(){
        let A = "";
            let B = this.data.Articles;
            for(let c of B){
                A+=this.PRender(c);
            }
        return html`
        <div class="popular_treks" id="p_treks">
            <div class="container">
                <div class="row">
                    <div class="title col-md-4">
                        <img src="${this.data.image_url}" alt="${this.data.image_name}">
                        <h2 class="h2_title">${this.data.title}</h2>
                        <p>${this.data.Description}</p>
                    </div>
                    <div class="p_slide col-md-8">
                        <div class="swiper-container">
                            <div class="swiper-wrapper" style="width:50%">
                            ${A}
                            </div>
                            <div class="swiper-button-next" style="margin-top:30px">
                                <i class="mdi mdi-arrow-right icon"></i>
                            </div>
                            <div class="swiper-button-prev">
                                <i class="mdi mdi-arrow-left icon"></i>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        `
    }
}
//#endregion
//#region Homes

class Start{
    constructor(objData){
        this.data = objData;
    }
    Round(rounds){
        return html`
        <div class="swiper-slide" style="background-image:url(${rounds.url})">
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
        return html`
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

//#endregion
//#region Create HomeData
const homedata = {
    "Title":[
        {"title":"Western Mongolia Horse Trek/Snow Leopard Tour","url":"images/bg.jpg","Description":"Most remote Kharkhiraa Turgen Mountains, Legendary Altai Tavan Bogd National Park,"}
        ]
};
//#endregion
//#region Create About data
const aboutData = {
    "imageurl":"SPA_Mongolian_Tour/images/abouts_us.png",
    "title":"ABOUT US",
    "Description":"Tours Mongolia Welcome to Horse Trails Mongolia! We are offering horse trekking adventures as well as customized jeep tours around beautiful Mongolia, combined with horses and camels. We run both short and long tours, near and far from Ulaanbaatar, the capitol of Mongolia. Horse riding is the perfect way to see the true Mongolia; to see the nomadic life style first hand and to become part of the wilderness, to feel the countries unique heritage and great history. The Mongols have a long and lively equestrian tradition. Our ger camp(Mongolian traditional acommodation-yurt) is located just a few miles away from Ulaanbaatar and this is where you will first be taken. You will meet extraordinary locals who teach horse riding, and all the people who will help make your stay an amazing adventure. Our country is 12 times the size of Great Britain with less then 1,000 kilometres of surfaced roads and no fences! So you will ride freely and without any distractions. Discover your true freedom in one of the last unspoilt countries of the world."
};
//#endregion
//#region Create HOT_TREKS data
const HOT_TREKS_DATA = {
    "img_url":"images/summer.png",
    "title":"Hot treks",
    "Description":"Discover the hidden beauty of nature on horseback",
        "slide":[
            {"img_url":"SPA_Mongolian_Tour/images/type_img1.jpg","title":"Horse Trekking in Northern Mongolia","Description":"The Central Mongolian trip will offer you both cultural and adventure tours. Highlights of this trip will be Mongolia’s oldest Monastery ErdeneZuuHiid and Mongolian Wild horses, legendary Gobi desert..","style":"swiper-slide-active"},
            {"img_url":"SPA_Mongolian_Tour/images/type_img.jpg","title":"Western Mongolia Horse Trek/Snowleopard Tour","Description":"Western Mongolia is the most remote region of the capital city. It is also the most ethnically diverse, mountainous, and scenic region of Mongolia, with thousands of years of history.","style":"swiper-slide-next"},
            {"img_url":"SPA_Mongolian_Tour/images/type_img1.jpg","title":"Horse Trekking in Northern Mongolia","Description":"The Central Mongolian trip will offer you both cultural and adventure tours. Highlights of this trip will be Mongolia’s oldest Monastery ErdeneZuuHiid and Mongolian Wild horses, legendary Gobi desert..","style":""},
            {"img_url":"SPA_Mongolian_Tour/images/type_img.jpg","title":"Western Mongolia Horse Trek/Snowleopard Tour","Description":"Western Mongolia is the most remote region of the capital city. It is also the most ethnically diverse, mountainous, and scenic region of Mongolia, with thousands of years of history.","style":""}
    ]
};
//#endregion
//#region Create SERVICES data
const SERVICES_DATA = {
    "image_url":"SPA_Mongolian_Tour/images/service.png",
    "image_name":"service",
    "Title":"Our services",
    "Description":"We offer all the specialized services required to your interests and needs, Among the services offered by the company stands out the coordination of itineraries for individuals or groups, including hotel reservations, transport, tours, car & ATV rentals, local flights, logistical support activities and any other special requirements necessary. Our company gives the opportunity to feel the rural Nomadic Mongolia friendliness with the professionalism that always characterizes our service.",
    "Articles":[
        {
        id:1,
        "image_url":"SPA_Mongolian_Tour/images/service1.png",
        "image_name":"Ticket Ordering",
        "Title":"Ticket Ordering",
        "Description":"We can handle your domestic flight tickets to Western Mongolia as well as Northern Mongolian Horse trekking tours."
        },
        {
            id:2,
            "image_url":"SPA_Mongolian_Tour/images/service2.png",
            "image_name":"COSTUMIZED TOURS",
            "Title":"COSTUMIZED TOURS",
            "Description":"We work with you to make tailor-made tours around Mongolia, which can combined with horse trekking or just by foot and camel trekking,supported by jeeps. "
        },
        {
            id:3,
            "image_url":"SPA_Mongolian_Tour/images/service3.png",
            "image_name":"GER CAMP(LODGING)",
            "Title":"GER CAMP(LODGING)",
            "Description":"Our Ger camp located just nearby Ulaanbaatar new airport, you can take a advantage of continent location of if you night flight that don't have to drive all the long way down from Ulaanbaatar city."
        },
        {
            id:4,
            "image_url":"SPA_Mongolian_Tour/images/service4.png",
            "image_name":"BOOKING",
            "Title":"BOOKING",
            "Description":"Vestibulum facilisis rhoncus tempor. Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex."
        }
    ]
};
//#endregion
//#region Create Popular data
const POPULAR_DATA = {
    "image_url":"SPA_Mongolian_Tour/images/popular_icon.png",
    "title":"POPULAR TREKS",
    "Description":"Popular Mongolian tours are designed to independent travelers, we can customize these tour in your best suits. You can ride horses from a day to multi days.  ",
    "Articles":[
        {
            "image_url":"SPA_Mongolian_Tour/images/popular1.png",
            "title":"Horseback Trekking to Khagin Khar Lake in Khentii",
            "Description":"Horse trekking to the glacier lake"
        },
        {
            "image_url":"SPA_Mongolian_Tour/images/popular2.png",
            "title":"Mongol Naadam Tour",
            "Description":"festival, event tours in Mongolia"
        }
    ]
};
//#endregion
//#region Create Gallery data
const Gallery_DATA = {
    "image_url":"SPA_Mongolian_Tour/images/gallery_icon.png",
    "title":"OUR GALLERY",
    "Articles":[
        {"image_url":"SPA_Mongolian_Tour/images/gallery1.jpg","id":"1","title":"Northern Mongolia Horse Trek"},
        {"image_url":"SPA_Mongolian_Tour/images/gallery5.jpg","id":"1","title":"Gobi desert tour mongolia"},
        {"image_url":"SPA_Mongolian_Tour/images/gallery1.jpg","id":"1","title":"Northern Mongolia Horse Trek"},
        {"image_url":"SPA_Mongolian_Tour/images/gallery5.jpg","id":"1","title":"Gobi desert tour mongolia"},
        {"image_url":"SPA_Mongolian_Tour/images/gallery1.jpg","id":"1","title":"Northern Mongolia Horse Trek"},
        {"image_url":"SPA_Mongolian_Tour/images/gallery5.jpg","id":"1","title":"Gobi desert tour mongolia"},
        {"image_url":"SPA_Mongolian_Tour/images/gallery1.jpg","id":"1","title":"Northern Mongolia Horse Trek"},
        {"image_url":"SPA_Mongolian_Tour/images/gallery5.jpg","id":"1","title":"Gobi desert tour mongolia"}
    ]
};
//#endregion
//#region Create Blog data
const Blog_DATA = {
    "Title":"FROM THE BLOG",
    "Description":"Take a look at Mongolia's takhi and discover how an Asian empire was won on horseback — and how Mongolia came to be known as the land of the horse.",
    "Articles":[
        {
            "image_url":"images/blog1.jpg",
            id:1,
            "title":"MONGOLIAN HORSE CULTURE",
            "Author":"Amartuvshin T. | 18 January 2017"
        },
        {
            "image_url":"images/blog1.jpg",
            id:1,
            "title":"MONGOLIAN HORSE CULTURE",
            "Author":"Amartuvshin T. | 18 January 2017"
        },
        {
            "image_url":"images/blog1.jpg",
            id:1,
            "title":"MONGOLIAN HORSE CULTURE",
            "Author":"Amartuvshin T. | 18 January 2017"
        }
    ]
};
//#endregion
//#region Create Aboutus data
const AboutDataUS = {
    
};
//#endregion
//#region Create Contact data
const ContactData = {
    
};
//#endregion


const home = new Home(homedata);
const start = new Start(homedata);
const about = new About(aboutData);
const h_treks = new HOT_TREKS(HOT_TREKS_DATA);
const services = new SERVICES(SERVICES_DATA);
const popular = new POPULAR(POPULAR_DATA);
const gallery = new Gallery(Gallery_DATA);
const blog = new Blog(Blog_DATA);
const about_us = new AboutUs(AboutUs);
const contact = new Contact(ContactData);
//Route list
SPA.AddRoute("/", "/", home);
SPA.AddRoute("/", "/SPA_Mongolian_Tour/index.html", start);
SPA.AddRoute("/", "/about", about);
SPA.AddRoute("/", "/h_treks", h_treks);
SPA.AddRoute("/", "/services", services);
SPA.AddRoute("/", "/p_treks", popular);
SPA.AddRoute("/", "/gallery", gallery);
SPA.AddRoute("/", "/blog", blog);
SPA.AddRoute("/", "/about_us", about_us);
SPA.AddRoute("/", "/contact", contact);


[...document.getElementsByClassName("main-links")].forEach(element => {
    
    element.addEventListener("click", e => {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
    }
    )
});

window.addEventListener("popstate", e => {
    console.log("navigation occured");
    SPA.OnRoute(document.location.pathname);
});

history.pushState = function()
{
    History.prototype.pushState.apply(history, arguments);
    SPA.OnRoute(document.location.pathname);
}

SPA.OnRoute(location.pathname);
SPA.OnRoute("/SPA_Mongolian_Tour/index.html");
