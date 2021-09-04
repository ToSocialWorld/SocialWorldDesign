import getDocumentLang from "./modules/getDocumentLang";
import GMap from "./modules/GMap";
import Popup from "./modules/popup";
import { isBlank, validateEmail } from "./modules/utility";

let textData = {
    sk: {
        email: {
            success: "Vaša správa nám bola odoslaná",
            error: "Vyskytla sa chyba. Skúste znova",
        },
        form: {
            wrongEmail: "Nesprávny formát e -mailu",
            wrongContent: "Vaša správa nemá byť prázdna"
        }
    },
    en: {
        email: {
            success: "Your message was sent to us",
            error: "An error occurred, please try again",
        },
        form: {
            wrongEmail: "Wrong email format",
            wrongContent: "Your message should not be empty"
        }
    },
    de: {
        email: {
            success: "Ihre Nachricht wurde an uns gesendet",
            error: "Es ist ein Fehler aufgetreten. Versuchen Sie es erneut",
        },
        form: {
            wrongEmail: "Falsches E-Mail-Format",
            wrongContent: "Ihre Nachricht sollte nicht leer sein"
        }
    }
};

let currentTextData;
for(let lang in textData) {
    if(getDocumentLang() === lang) currentTextData = textData[lang];
}

let map = new GMap("Michalovce, Jana Holleho 107", 14, null, "#map");
map.updateMarkers([{address: {
    city: "Michalovce",
    street: "Jana Holleho",
    buildingNumber: 107
}}]);

//PROCESS CONTACT FORM
let popup = null;
//mail sending response
let urlQueryParams = new URLSearchParams(window.location.search);
let mailStatus = urlQueryParams.get("status");
if(mailStatus) {
    popup = new Popup();
    if(mailStatus === "ok") {
        popup.setContent(`<p class="contact-popup-text">${currentTextData.email.success}</p>`);
    } else {
        popup.setContent(`<p class="contact-popup-text">${currentTextData.email.error}</p>`);
    }
    popup.render(document.querySelector("body"));
}

let contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", processFormData);

function processFormData(event) {
    event.preventDefault();
    let contactForm = document.querySelector(".contact-form");
    contactForm.action = window.location.origin + "/mail.php";
    contactForm.method = "POST";

    if(!validate(contactForm)) return;
    let currentHref = document.createElement("input");
    currentHref.value = window.location.href;
    currentHref.name = "returnAddress";
    currentHref.classList.add("hide");
    contactForm.appendChild(currentHref);
    contactForm.submit();
    currentHref.remove();
    contactForm.reset();
}

function validate(form) {
    let {email, opinion} = form.elements;
    let isValid = true;

    if(!validateEmail(email.value)) {
        insertError(form, email, currentTextData.form.wrongEmail);
        isValid = false;
    }
    if(isBlank(opinion.value)) {
        insertError(form, opinion, currentTextData.form.wrongContent);
        isValid = false;
    }

    return isValid;
}

function insertError(parentEl, insertBeforeEl, text) {    
    let errorParagraph = document.createElement("p");
    errorParagraph.textContent = text;
    errorParagraph.classList.add("default-error");
    parentEl.insertBefore(errorParagraph, insertBeforeEl);
    if(!!parentEl.onclick) return;
    parentEl.onclick = event => {
        if(event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA" && event.target.tagName !== "BUTTON") return;
        let errors = document.querySelectorAll(".default-error");
        Array.from(errors).forEach(warning => warning.remove());
    };
}