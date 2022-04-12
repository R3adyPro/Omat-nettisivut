

function Laheta(){
let kayttaja = document.getElementById('id').value;
let posti = document.getElementById('pNumero').value;
let testi = /^[0-9-.,]+$/.test(posti);
let sPostiTarkistus = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
let sahkoposti = document.getElementById('sPosti').value;
let post = sPostiTarkistus.test(sahkoposti)

Tarkistus();





}

function Tarkistus(){
    if(document.getElementById("id").value.length == 0){
        alert("Id puuttuu")
    }
    else if(document.getElementById("salasana").value.length == 0){
        alert("Salasana puuttuu")
    }
    else if(document.getElementById("nimi").value.length == 0){
        alert("Nimi Puuttuu")
    }
    else if(document.getElementById("osoite").value.length == 0){
        alert("Osoite puuttuu")
    }
    else if(document.getElementById("maa").value.length == 0){
        alert("Maa puuttuu")
    }
    else if(document.getElementById("sPosti").value.length == 0){
        alert("Sähköposti puuttuu")
    }
    else if(document.getElementById("pNumero").value.length == 0){
        alert("Puhelin numero puuttuu")
    }
    else if(document.getElementById("mies").checked == 0){
        alert("Valitse toinen vaihtoehdoista")
    }
    else if(document.getElementById("nainen").checked == 0){
        alert("Valitse toinen vaihtoehdoista")
    }
    else if(document.getElementById("suomi").checked == 0){
        alert("Valitse toinen vaihtoehdoista")
    }
    else if(document.getElementById("muuSuomi").checked == 0){
        alert("Valitse toinen vaihtoehdoista")
    }
    else if(kayttaja.length < 6){
        console.log(sahkoposti)
        alert('ID:n tulee olla vähintää 6 merkkiä pitkä.')
    }
    else if(testi == false){
        alert('Postinumeroon vain numeroita.')
    }
    else if(posti.length < 5 || posti.length > 5){
        alert('Postinumeron pitää olla 5 kirjainta pitkä.')
    }
    else if(post == false){
        alert('Sähköposti ei ole kirjoitettu oikein')
    }
}