document.addEventListener("DOMContentLoaded", function(event) {

    var hamburger = document.querySelectorAll(".hamburger");
    //
    var menuMobile = document.querySelector(".nav-primary-mobile");

    for(var i = 0; i < hamburger.length; i++) {
        hamburger[i].addEventListener("click", openMenu);
    }



    function openMenu(evt) {
        evt.preventDefault();

        var cible = evt.currentTarget;

        if (cible.classList.contains("open")){
            cible.classList.remove("open");
            menuMobile.classList.remove("open");
        } else {
            cible.classList.add("open");
            menuMobile.classList.add("open");
        }
    }

});