import html from "./modules/components/utils.js"
class RecentNewsItem { 

    constructor(Data) {
        this.Data= [];
        this.id = Data.id;
        this.Image_Name = Data.Image_Name;
        this.Image_Url = Data.Image_Url;
        this.Description = Data.Description;
        this.DueDate = Data.DueDate;
        this.title = Data.title
    }
    Render() {
        return html`
        <div class="swiper-slide">
            <div class="row">
                <div class="type col-md-12">
                    <div class="picture">
                        <img src="images/${this.Image_Url}" alt="${this.Image_Name}">
                    </div>
                    <div class="title">
                        <h3>${this.title}</h3>
                    </div>
                    <div class="caption">
                        <p>${this.Description}</p>
                    </div>
                    <div class="read_more">
                        <a href="#">read more<i class="mdi mdi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

export default class RecentNews {

    constructor(recentNewsUrl) {
        this._recentNewsList = [];
        this._recentNewsUrl = recentNewsUrl;
        this._lastUpdated = Date.now();
        this._hasChanged = false;
    }
    //
    Upload() {
        if (this._hasChanged) { 
            fetch(this._recentNewsUrl,
                {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'versioning' : false
                },
                body: JSON.stringify(this._recentNewsList)
            })
                .then(response => { console.log(response.status); })
                .catch(err => { console.log(err) });

            this._hasChanged = false;
        }
    }
    Download(targetElement) {
        fetch(`${this._recentNewsUrl}`)
        .then( result => {
            result.json()
                .then(jsob => {
                    gebi(targetElement).insertAdjacentHTML("afterbegin",
                    jsob.map(newNews => {
                            const _newNews = new RecentNewsItem(newNews);
                            console.log(RecentNewsItem);
                            console.log(_newNews);
                            this._recentNewsList.push(_newNews);
                            return _newNews.Render();
                        }
                        )
                        .reduce((prev, cur) => prev + cur, "")
                    );
                }
            )    
        })
        .catch(err => { console.log(err) });
    }
}

const gebi = id => document.getElementById(id);

const recentNews = new RecentNews("https://api.npoint.io/b42d0c3abd59c8b7bafb");


recentNews.Download("main");

setInterval(() => recentNews.Download("main"), 600000);
setInterval( () => recentNews.Upload(), 150000);
