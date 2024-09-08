var promenaTemeDugme = document.getElementById("promenaTemeDugme");
var promenaTemeDugmeMaliEkran = document.getElementById("promenaTemeDugmeMaliEkran");
var trenutnaTema = "tamna";

const tamneKlase = ["tamniKontejner", "tamniProvidniKontejner", "tamnaSlova"];
const svetleKlase = ["svetliKontejner", "svetliProvidniKontejner", "svetlaSlova"];

window.addEventListener("load", () => {
    if (!document.cookie.includes("tema"))
        document.cookie = "tema=tamna; path=/; SameSite=Lax;";
    else 
        trenutnaTema = document.cookie.split(";")[0].split("=")[1];
    PrilagodiTemu();
});

promenaTemeDugme.addEventListener("click", () => {
    if (trenutnaTema == "tamna") 
        trenutnaTema = "svetla"
    else 
        trenutnaTema = "tamna";

    document.cookie = "tema=" + trenutnaTema + "; path=/; SameSite=Lax";
    PrilagodiTemu();
});

promenaTemeDugmeMaliEkran.addEventListener("click", () => {
    if (trenutnaTema == "tamna") 
        trenutnaTema = "svetla"
    else 
        trenutnaTema = "tamna";

    document.cookie = "tema=" + trenutnaTema + "; path=/; SameSite=Lax";
    PrilagodiTemu();
});

function PrilagodiTemu() {

    console.log(trenutnaTema);

    var trenutneKlase = trenutnaTema != "tamna" ? tamneKlase : svetleKlase;
    var noveKlase = trenutnaTema != "tamna" ? svetleKlase : tamneKlase;

    for (let i = 0; i < trenutneKlase.length; i++) {

        document.querySelectorAll("." + trenutneKlase[i]).forEach(element => {
            element.classList.remove(trenutneKlase[i]);
            element.classList.add(noveKlase[i]);
        });
    }
}

