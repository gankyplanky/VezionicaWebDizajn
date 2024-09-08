window.addEventListener("load", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("kontejnerInformacija").innerHTML = "";
        document.getElementById("kontejnerInformacija").innerHTML = this.responseText;
    }

    xhttp.open("GET", "https://gankyplanky.github.io/VezionicaWebDizajn//resursi/drugo/kontakti.txt", true);
    xhttp.send();
});