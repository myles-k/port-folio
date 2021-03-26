
function activateNav() {
    let menuButton = document.getElementById("menu-btn");

    let sideNav = document.getElementById("nav-links");

    menuButton.addEventListener("click", function () {
        sideNav.classList.toggle("nav-active")
    })

}

activateNav()