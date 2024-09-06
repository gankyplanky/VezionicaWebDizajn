const emailProvera = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var parametri = new URLSearchParams(location.search);

var imeIspravno = true;
var kontaktIspravan = true;
var opisIspravan = true;

if (!parametri.get("ime")) {
    imeIspravno = false;
    document.getElementById("imePasus").classList.remove("nevidljiv");
    document.getElementById("imePasus").classList.add("vidljiv");
}

if (!parametri.get("kontakt") || !parametri.get("kontakt").match(emailProvera)) {
    kontaktIspravan = false;
    document.getElementById("kontaktPasus").classList.remove("nevidljiv");
    document.getElementById("kontaktPasus").classList.add("vidljiv");
}

if (!parametri.get("opis")) {
    opisIspravan = false;
    document.getElementById("opisPasus").classList.remove("nevidljiv");
    document.getElementById("opisPasus").classList.add("vidljiv");
}

if (imeIspravno && kontaktIspravan && opisIspravan) {
    document.getElementById("dugmeNazad").addEventListener("click", () => {window.location.replace("../index.html")});
    document.getElementById("uspehPasus").classList.remove("nevidljiv");
    document.getElementById("uspehPasus").classList.add("vidljiv");
} else {
    document.getElementById("dugmeNazad").addEventListener("click", () => {history.back()});
}