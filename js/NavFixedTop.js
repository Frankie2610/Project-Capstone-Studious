const navTop = document.querySelector(".navbar-top");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset > 100) {
        navTop.classList.add("nav-fixed");
    } else {
        navTop.classList.remove("nav-fixed")
    }
})