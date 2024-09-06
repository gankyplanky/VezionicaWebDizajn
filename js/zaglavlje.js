var hamburgerMeniDugme = document.getElementById("hamburgerIkonica");
var hamburgerMeniNavigacija = document.getElementById("donjiDeoZagavlja");
var meniProsiren = false;

var hamburgerMeni = document.getElementById("hamburgerMeni");
var normalnaNavigacija = document.getElementById("normalnaNavigacija");
var smanjenEkran = window.matchMedia("(max-width: 400px)");

hamburgerMeniDugme.addEventListener("click", ()=> {
    if (!meniProsiren) {
        hamburgerMeniNavigacija.classList.add("vidljiv");
        hamburgerMeniNavigacija.classList.remove("nevidljiv");
    } else {
        hamburgerMeniNavigacija.classList.remove("vidljiv");
        hamburgerMeniNavigacija.classList.add("nevidljiv");
    }
    meniProsiren = !meniProsiren;
});

function prilagodiZaglavlje() {
    if (smanjenEkran.matches) {
        hamburgerMeni.classList.remove("nevidljiv");
        hamburgerMeni.classList.add("vidljiv");
        normalnaNavigacija.classList.add("nevidljiv");
        normalnaNavigacija.classList.remove("vidljiv");
    } else {
        hamburgerMeni.classList.add("nevidljiv");
        hamburgerMeni.classList.remove("vidljiv");
        normalnaNavigacija.classList.remove("nevidljiv");
        normalnaNavigacija.classList.add("vidljiv");
    }

    hamburgerMeniNavigacija.classList.add("nevidljiv");
    hamburgerMeniNavigacija.classList.add("vidljiv");
}

smanjenEkran.addEventListener("change", prilagodiZaglavlje);
prilagodiZaglavlje();