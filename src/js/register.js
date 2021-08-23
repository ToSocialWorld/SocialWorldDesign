let userTypeButtons = document.querySelectorAll(".register-button");

Array.from(userTypeButtons).forEach((button, index, buttons) => {
    button.addEventListener("click", event => {
        buttons.forEach(button => button.classList.remove("default-button-2-active"));

        event.target.classList.add("default-button-2-active");
    });
});

let card = new Cleave('#card-number', {
    delimiter: " ",
    creditCard: true
});

let phone = new Cleave('#user-phone', {
    phone: true,
    phoneRegionCode: 'SK',
    prefix: "+421"
});

let identNumber = new Cleave('#ident-number', {
    delimiter: "/",
    blocks: [6, 4]
});