import Component from "../components/component.js";
export default class AboutUs extends Component{
    constructor(objData){
        super();
        this.data = objData;
    }
    Render(){
        return this.html`
        <div class="about_us" id="about_us">
            <div class="container">
                <div class="row">
                    <div class="title col-md-12">
                        <img src="images/who_icon.png" alt="">
                        <h2 class="h2_title">who we are</h2>
                        <p>We offer all the specialized services required to your interests and needs, Among the services offered by the company stands out the coordination of itineraries for individuals or groups, including hotel reservations, transport, tours, car & ATV rentals, local flights, logistical support activities and any other special requirements necessary. Our company gives the opportunity to feel the rural Nomadic Mongolia friendliness with the professionalism that always characterizes our service.</p>
                    </div>
                        <div class="commends col-md-12" style="height: 400px;">
                    </div>
                </div>
            </div>
        </div>
        `
    }
}