import Component from "../components/component.js";
export default class Contact extends Component{
    constructor(objData){
        super();
        this.data = objData;
    }
    Render(){
        return this.html`
        <div class="contact">
            <div class="row">
                <div class="title col-md-12">
                    <div class="container">
                        <img src="images/contact_icon.png" alt="">
                        <h2 class="h2_title">How to find us</h2>
                        <p>We are located only 20km away from Mongolian new airport located in the Hoshigt Valley</p>
                    </div>
                </div>
                <div class="map col-md-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21481.071473163174!2d106.94774149019453!3d47.70123720025659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96a34c4e1e89bf%3A0x60209626f83b5052!2z0JfRg9GD0L3QvNC-0LQ!5e0!3m2!1smn!2smn!4v1635670046264!5m2!1smn!2smn" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="contact_us">
                    <div class="container">
                        <div class="row">
                            <div class="info col-md-4">
                                <div class="address">
                                    <h5>Address</h5>
                                    <p>1st Bag, Seruun Denj, Building №13, Zuunmod city, Zuunmod city Mongolia</p>
                                </div>
                                <div class="phone">
                                    <h5>Call us</h5>
                                    <p>976-99003445</p>
                                </div>
                                <div class="mail">
                                    <h5>Email</h5>
                                    <p>info@horsetrailsmongolia.com</p>
                                </div>
                            </div>
                            <div class="post col-md-8">
                                <form action="" method="post">
                                    <div class="row">
                                        <p class="name col-md-6">
                                            <label>
                                                <input type="text" id="name" placeholder="Name..." maxlength="20" required>
                                            </label>
                                        </p>
                                        <p class="email col-md-6">
                                            <label>
                                                <input type="email" id="email" placeholder="Email..." required>
                                            </label>
                                        </p>
                                        <p class="subject col-md-12">
                                            <label>
                                                <input type="text" id="subject" placeholder="Subject..." required>
                                            </label>
                                        </p>
                                        <p class="message col-md-12">
                                            <label>
                                                <textarea type="text" id="message" placeholder="Message..." required></textarea>
                                            </label>
                                        </p>
                                        <input class="send" type="submit" value="Send Message">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}