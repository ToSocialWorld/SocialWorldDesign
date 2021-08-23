import getDocumentLanguage from "./getDocumentLang";

function getStarsFromRating(rating) {
    let i, stars = "";
    for(i = 0; i < 5; i++) {
        stars += `<span class="rating-star">${(i < Math.round(rating)) ? "★" : "☆"}</span>\n`;
    }
    return stars;
}

export default class Helper {
    constructor(firstName, lastName, age, payment, address, rating, description, userImgUrl) {
        this.userName = {firstName: firstName, lastName: lastName};
        this.age = age;
        this.address = address;
        this.userDescription = description;
        this.userImgUrl = userImgUrl;
        this.payment = payment;
        this.rating = rating;
    }

    getFilledOffer() {
        const lang = getDocumentLanguage();
        switch(lang) {
            case "en":
                return this.getFilledOfferEN();
            case "de":
                return this.getFilledOfferDE();
            default:
                return this.getFilledOfferSK();
        }
    }

    getFilledOfferMap() {
        const lang = getDocumentLanguage();
        switch(lang) {
            case "en":
                return this.getFilledOfferMapEN();
            case "de":
                return this.getFilledOfferMapDE();
            default:
                return this.getFilledOfferMapSK();
        }
    }

    getFilledOfferEN() {
        return `
            <div class="offer">
                <div class="offer-info">
                    <figure class="offer-img">
                        <img src="${this.userImgUrl ? this.userImgUrl : "../img/blank-user.png"}" alt="blank user">
                    </figure>
                    <div>
                        <p class="offer-user-name">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                    </div>
                    <div>
                        <p class="offer-user-rating">
                            ${getStarsFromRating(this.rating)}
                        </p>
                    </div>
                </div>
                <a href="#" class="offer-link"></a>
                <div class="offer-extended">
                    <div class="offer-extended-container">
                        <div class="offer-info">
                            <figure class="offer-img"><img src="${this.userImgUrl ? this.userImgUrl : "../img/blank-user.png"}" alt="blank user"></figure>
                            <div>
                                <p class="offer-user-name">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                                <p class="offer-user-age">Age: ${this.age}</p>
                            </div>
                            <div>
                                <p class="default-paragraph">Address</p>
                                <p class="offer-address">${this.address.city}, ${this.address.street} ${this.address.buildingNumber}</p>
                            </div>
                            <div>
                                <p class="default-paragraph">Payment</p>
                                <p class="offer-hour-payment">${this.payment} eur/hod</p>
                            </div>
                            <div>
                                <p class="offer-user-rating">
                                    ${getStarsFromRating(this.rating)}
                                    <span class="rating-numeral">${this.rating}</span>
                                </p>
                            </div>
                            <a href="#" class="offer-link"></a>
                        </div>
                        <div class="offer-description">
                            <p class="default-paragraph">
                                ${this.userDescription.slice(0, 80)}...
                            </p>
                        </div>
                        <div class="show-on-map">
                            <button class="show-on-map-btn">Show on map</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getFilledOfferMapEN() {
        return `
            <div class="offer-extended-map">
                <div class="offer-extended-container">
                    <div class="offer-info">
                        <figure class="offer-img"><img src="${this.userImgUrl ? this.userImgUrl : "../img/blank-user.png"}" alt="blank user"></figure>
                        <div>
                            <p class="offer-user-name default-paragraph">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                            <p class="offer-user-age">Age: ${this.age}</p>
                        </div>
                        <div>
                            <p class="default-paragraph">Payment</p>
                            <p class="offer-hour-payment">${this.payment} eur/hod</p>
                        </div>
                        <div>
                            <p class="default-paragraph">Address</p>
                            <p class="offer-address">${this.address.city}, ${this.address.street} ${this.address.buildingNumber}</p>
                        </div>
                        <a href="#" class="offer-link"></a>
                    </div>
                    <div>
                        <p class="offer-user-rating">
                            ${getStarsFromRating(this.rating)}
                            <span class="rating-numeral">${this.rating}</span>
                        </p>
                    </div>
                    <div class="offer-description">
                        <p class="default-paragraph">
                            ${this.userDescription.slice(0, 80)}...
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    getFilledOfferDE() {
        return `
            <div class="offer">
                <div class="offer-info">
                    <figure class="offer-img">
                        <img src="${this.userImgUrl ? this.userImgUrl : "../img/blank-user.png"}" alt="blank user">
                    </figure>
                    <div>
                        <p class="offer-user-name">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                    </div>
                    <div>
                        <p class="offer-user-rating">
                            ${getStarsFromRating(this.rating)}
                        </p>
                    </div>
                </div>
                <a href="#" class="offer-link"></a>
                <div class="offer-extended">
                    <div class="offer-extended-container">
                        <div class="offer-info">
                            <figure class="offer-img"><img src="${this.userImgUrl ? this.userImgUrl : "../img/blank-user.png"}" alt="blank user"></figure>
                            <div>
                                <p class="offer-user-name">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                                <p class="offer-user-age">Alter: ${this.age}</p>
                            </div>
                            <div>
                                <p class="default-paragraph">Adresse</p>
                                <p class="offer-address">${this.address.city}, ${this.address.street} ${this.address.buildingNumber}</p>
                            </div>
                            <div>
                                <p class="default-paragraph">Zahlung</p>
                                <p class="offer-hour-payment">${this.payment} eur/stun</p>
                            </div>
                            <div>
                                <p class="offer-user-rating">
                                    ${getStarsFromRating(this.rating)}
                                    <span class="rating-numeral">${this.rating}</span>
                                </p>
                            </div>
                            <a href="#" class="offer-link"></a>
                        </div>
                        <div class="offer-description">
                            <p class="default-paragraph">
                                ${this.userDescription.slice(0, 80)}...
                            </p>
                        </div>
                        <div class="show-on-map">
                            <button class="show-on-map-btn">Auf der Karte anzeigen</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getFilledOfferMapDE() {
        return `
            <div class="offer-extended-map">
                <div class="offer-extended-container">
                    <div class="offer-info">
                        <figure class="offer-img"><img src="${this.userImgUrl ? this.userImgUrl : "../img/blank-user.png"}" alt="blank user"></figure>
                        <div>
                            <p class="offer-user-name default-paragraph">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                            <p class="offer-user-age">Alter: ${this.age}</p>
                        </div>
                        <div>
                            <p class="default-paragraph">Zahlung</p>
                            <p class="offer-hour-payment">${this.payment} eur/stun</p>
                        </div>
                        <div>
                            <p class="default-paragraph">Adresse</p>
                            <p class="offer-address">${this.address.city}, ${this.address.street} ${this.address.buildingNumber}</p>
                        </div>
                        <a href="#" class="offer-link"></a>
                    </div>
                    <div>
                        <p class="offer-user-rating">
                            ${getStarsFromRating(this.rating)}
                            <span class="rating-numeral">${this.rating}</span>
                        </p>
                    </div>
                    <div class="offer-description">
                        <p class="default-paragraph">
                            ${this.userDescription.slice(0, 80)}...
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    getFilledOfferSK() {
        return `
            <div class="offer">
                <div class="offer-info">
                    <figure class="offer-img">
                        <img src="${this.userImgUrl ? this.userImgUrl : "img/blank-user.png"}" alt="blank user">
                    </figure>
                    <div>
                        <p class="offer-user-name">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                    </div>
                    <div>
                        <p class="offer-user-rating">
                            ${getStarsFromRating(this.rating)}
                        </p>
                    </div>
                </div>
                <a href="#" class="offer-link"></a>
                <div class="offer-extended">
                    <div class="offer-extended-container">
                        <div class="offer-info">
                            <figure class="offer-img"><img src="${this.userImgUrl ? this.userImgUrl : "img/blank-user.png"}" alt="blank user"></figure>
                            <div>
                                <p class="offer-user-name">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                                <p class="offer-user-age">Vek: ${this.age}</p>
                            </div>
                            <div>
                                <p class="default-paragraph">Adresa</p>
                                <p class="offer-address">${this.address.city}, ${this.address.street} ${this.address.buildingNumber}</p>
                            </div>
                            <div>
                                <p class="default-paragraph">Platenie</p>
                                <p class="offer-hour-payment">${this.payment} eur/hod</p>
                            </div>
                            <div>
                                <p class="offer-user-rating">
                                    ${getStarsFromRating(this.rating)}
                                    <span class="rating-numeral">${this.rating}</span>
                                </p>
                            </div>
                            <a href="#" class="offer-link"></a>
                        </div>
                        <div class="offer-description">
                            <p class="default-paragraph">
                                ${this.userDescription.slice(0, 80)}...
                            </p>
                        </div>
                        <div class="show-on-map">
                            <button class="show-on-map-btn">Zobraziť na mape</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getFilledOfferMapSK() {
        return `
            <div class="offer-extended-map">
                <div class="offer-extended-container">
                    <div class="offer-info">
                        <figure class="offer-img"><img src="${this.userImgUrl ? this.userImgUrl : "img/blank-user.png"}" alt="blank user"></figure>
                        <div>
                            <p class="offer-user-name default-paragraph">${this.userName.firstName} ${this.userName.lastName.charAt(0)}.</p>
                            <p class="offer-user-age">Vek: ${this.age}</p>
                        </div>
                        <div>
                            <p class="default-paragraph">Platenie</p>
                            <p class="offer-hour-payment">${this.payment} eur/hod</p>
                        </div>
                        <div>
                            <p class="default-paragraph">Adresa</p>
                            <p class="offer-address">${this.address.city}, ${this.address.street} ${this.address.buildingNumber}</p>
                        </div>
                        <a href="#" class="offer-link"></a>
                    </div>
                    <div>
                        <p class="offer-user-rating">
                            ${getStarsFromRating(this.rating)}
                            <span class="rating-numeral">${this.rating}</span>
                        </p>
                    </div>
                    <div class="offer-description">
                        <p class="default-paragraph">
                            ${this.userDescription.slice(0, 80)}...
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
}