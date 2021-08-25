import getDocumentLang from "./getDocumentLang";

export default function addFindPopup() {
    let popup = `
        <div class="default-popup-container">
            <div class="default-popup" id="find-in-progress">
                <div class="logo">
                    <img src="img/logo-high-res.png" alt="Error loading image">
                </div>
                <div class="popup-description">
                    <p>
                        Toto je len návrh dizajnu, momentálne pracujeme na vytvorení funkčnej stránky. 
                    </p>
                    <p>
                        Ak Vás táto služba zaujala nechajte nám svoju emailovú adresu, budete medzi prvými 
                        ktorých budeme informovať o spustení novej služby
                    </p>
                </div>
                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup">
                    <form action="https://tosocialworld.us5.list-manage.com/subscribe/post?u=84d98cc7f310a3c6cf2565b3a&amp;id=59a6971af8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                      <div id="mc_embed_signup_scroll">
                        <input type="email" placeholder="Uveďte email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                        <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                          <label class="checkbox subfield" for="gdpr_350945"><input type="checkbox" id="gdpr_350945" name="gdpr[350945]" value="Y" class="av-checkbox gdpr"><span>Súhlasím so spracovaním emailu</span> </label>
                        </fieldset>
                        <div id="mce-responses" class="clear">
                            <div class="response" id="mce-error-response" style="display:none"></div>
                            <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_84d98cc7f310a3c6cf2565b3a_59a6971af8" tabindex="-1" value=""></div>
                        <div class="clear"><input type="submit" value="Odoslať" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                      </div>
                    </form>
                </div>
                <!--End mc_embed_signup-->
                <button class="close-popup">
                    <span></span><span></span>
                </button>
            </div>
        </div>
    `;

    if(getDocumentLang() === "en") {
        popup = `
            <div class="default-popup-container">
                <div class="default-popup" id="find-in-progress">
                    <div class="logo">
                        <img src="../img/logo-high-res.png" alt="Error loading image">
                    </div>
                    <div class="popup-description">
                        <p>
                            This is just a design prototype, we are currently working on creating a functional page.
                        </p>
                        <p>
                            If you are interested in this service, leave us your email address and you will be among the first
                            people that we will inform about the launch of the service
                        </p>
                    </div>
                    <form action="" class="find-in-progress-form">
                        <input type="email" placeholder="Write your email" required>
                        <input type="checkbox" id="accept-terms" required>
                        <label for="accept-terms">I agree with email processing</label>
                        <button type="submit" class="default-button" id="send-form">Send</button>
                    </form>
                    <button class="close-popup">
                        <span></span><span></span>
                    </button>
                </div>
            </div>
        `;
    } else if(getDocumentLang() === "de") {
        popup = `
            <div class="default-popup-container">
                <div class="default-popup" id="find-in-progress">
                    <div class="logo">
                        <img src="../img/logo-high-res.png" alt="Error loading image">
                    </div>
                    <div class="popup-description">
                        <p>
                            Dies ist nur ein Designvorschlag, an dem wir derzeit arbeiten, um eine funktionale Website zu erstellen.
                        </p>
                        <p>
                            Wenn Sie an diesem Service interessiert sind, hinterlassen Sie uns Ihre Email Adresse, 
                            Sie werden unter den Ersten sein, die über die Einführung unseres neuen Dienstes informiert werden
                        </p>
                    </div>
                    <form action="" class="find-in-progress-form">
                        <input type="email" placeholder="Schreiben Sie Ihre E-Mail" required>
                        <input type="checkbox" id="accept-terms" required>
                        <label for="accept-terms">Ich stimme der E-Mail-Verarbeitung zu</label>
                        <button type="submit" class="default-button" id="send-form">Senden</button>
                    </form>
                    <button class="close-popup">
                        <span></span><span></span>
                    </button>
                </div>
            </div>
        `;
    }

    if(localStorage.popupShowed === undefined) {
        localStorage.popupShowed = false;
    }

    let popupShowed = localStorage.popupShowed === "true";

    //if(!popupShowed) {
        document.querySelector("body").innerHTML += popup;
        let closePopup = document.querySelector(".close-popup");
        closePopup.addEventListener("click", event => {
            closePopup.parentNode.parentNode.classList.add("hide");
            localStorage.popupShowed = true;
        });
    //}
};