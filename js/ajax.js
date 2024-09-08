window.addEventListener("load", () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("kontejnerInformacija").innerHTML = "";
        document.getElementById("kontejnerInformacija").innerHTML = this.responseText;
    }

    xhttp.open("GET", "http://127.0.0.42:8888/resursi/drugo/kontakti.txt", true);
    xhttp.send();
});