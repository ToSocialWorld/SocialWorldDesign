import addFindPopup from "./modules/findPopup";
import addFormToggler from "./modules/formToggler";
import addPaymentSlider from "./modules/paymentSlider";
import GMap from "./modules/GMap";
import {usersInNeed, helpers} from "./usersData";
const markerIcon = {
    path: "M 44,25 A 19,19 0 0 1 25,44 19,19 0 0 1 6,25 19,19 0 0 1 25,6 19,19 0 0 1 44,25 Z",
    scale: .5,
    fillColor: "#fff",
    fillOpacity: 1,
    strokeColor: "#ec536c",
    strokeWeight: 6
};

addFindPopup();
addFormToggler();
addPaymentSlider();

let map = new GMap("Kosice", 13, markerIcon, "#map");

let urlQueryParams = new URLSearchParams(window.location.search);
let initialUserType = urlQueryParams.get("type");

changeUserType(initialUserType === "need");

let inNeedButton = document.querySelector("#find-need-help"),
        helperButton = document.querySelector("#find-want-help");
inNeedButton.addEventListener("click", () => changeUserType(true));
helperButton.addEventListener("click", () => changeUserType(false));

function changeUserType(predicate) {
    let inNeedButton = document.querySelector("#find-need-help"),
        helperButton = document.querySelector("#find-want-help");

    if(predicate) {
        setCurrentUsers(helpers);
        inNeedButton.classList.add("default-button-2-active");
        helperButton.classList.remove("default-button-2-active");
    } else {
        setCurrentUsers(usersInNeed);
        inNeedButton.classList.remove("default-button-2-active");
        helperButton.classList.add("default-button-2-active");
    }
}

function setCurrentUsers(users) {
    let newMarkersData = getMarkersData(users);
    renderOffers(users);
    map.updateMarkers(newMarkersData);
}

function getMarkersData(users) {
    return users.map(user => ({
        address: user.address,
        infoWindowOptions: {
            content: user.getFilledOfferMap()
        },
        position: user.address.position
    }));
}

function renderOffers(users) {
    let offersContainer = document.querySelector(".offers");

    offersContainer.innerHTML = users.reduce((acc, user) => {
        return acc + user.getFilledOffer();
    }, "");

    addShowOnMap(users);
}

function addShowOnMap(users) {
    let extendedOffers = document.querySelectorAll(".offer-extended");

    for(let i = 0; i < extendedOffers.length; i++) {
        extendedOffers[i].addEventListener("click", event => {
            showOnMap(event.target, extendedOffers[i], users[i].address.position);
        });
    }
}

function showOnMap(target, extendedOffer, latLng) {
    if(target.classList.contains("show-on-map-btn")) {
        extendedOffer.style.display = "none";
        setTimeout(() => extendedOffer.removeAttribute("style"), 50);
        map.setCenter(latLng);
    }
}