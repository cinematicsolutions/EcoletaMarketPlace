const buttonSearch = document.querySelector("#btnSubmit");
const modal = document.querySelector ("#modal");
const close = document.querySelector ("#modal .header a");

buttonSearch.addEventListener("click", () => {

    modal.classList.remove("hide");
    event.preventDefault();

})

close.addEventListener ("click", () => {


    modal.classList.add("hide");
    event.preventDefault();
})