export default function addFormToggler() {
    let formToggler = document.querySelector("#toggle-filter");
    
    formToggler.addEventListener("click", event => {
        event.preventDefault();
        document.querySelector(".find-filter-extended").classList.toggle("block");
    });
};