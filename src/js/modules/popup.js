export default function Popup(content) {
    this.content = content;
}

Popup.prototype.getBody = function() {
    let popupContainer = document.createElement("div");
    popupContainer.classList.add("default-popup-container");
    popupContainer.innerHTML = `
        <div class="default-popup">
            ${this.content}
            <button class="close-popup">
                <span></span><span></span>
            </button>
        </div>      
    `;

    return popupContainer;
};

Popup.prototype.render = function(parentEl) {
    if(localStorage.popupShowed === undefined) {
        localStorage.popupShowed = false;
    }

    let popupShowed = localStorage.popupShowed === "true";

    //if(!popupShowed) {
        let newBody = this.getBody();
        parentEl.appendChild(newBody);
        
        let closePopup = document.querySelector(".close-popup");
        closePopup.addEventListener("click", () => {
            newBody.remove();
            localStorage.popupShowed = true;
        });
    //}
};

Popup.prototype.setContent = function(content) {
    this.content = content;
}