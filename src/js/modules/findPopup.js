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
                <form action="" class="find-in-progress-form">
                    <input type="email" placeholder="Uveďte email" required>
                    <input type="checkbox" id="accept-terms" required>
                    <label for="accept-terms">Súhlasím so spracovaním emailu</label>
                    <button type="submit" class="default-button" id="send-form">Odoslať</button>
                </form>
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