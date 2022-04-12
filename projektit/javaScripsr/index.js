
const kaverit = [];
i = 0;

function Lisää() {
    if(i<10){
        i++;
        nimiKaveri = document.getElementById('nimi').value;
        kaverit.push(nimiKaveri);
        document.getElementById("demo").innerHTML = kaverit;
        document.getElementById('nimi').value = '';
        document.getElementById('demo').innerHTML = '1. ' + kaverit[0];
        document.getElementById('demo2').innerHTML = '2. ' + kaverit[1];
        document.getElementById('demo3').innerHTML = '3. ' + kaverit[2];
        document.getElementById('demo4').innerHTML = '4. ' + kaverit[3];
        document.getElementById('demo5').innerHTML = '5. ' + kaverit[4];
        document.getElementById('demo6').innerHTML = '6. ' + kaverit[5];
        document.getElementById('demo7').innerHTML = '7. ' + kaverit[6];
        document.getElementById('demo8').innerHTML = '8. ' + kaverit[7];
        document.getElementById('demo9').innerHTML = '9. ' + kaverit[8];
        document.getElementById('demo10').innerHTML = '10. ' + kaverit[9];
    }
}

function Poista(){
    if(i<20){
         i = i - 1;
        poistettava = document.getElementById('nimi').value;
        let index = kaverit.indexOf(poistettava);
        if (index > -1) {
          kaverit.splice(index, 1);
        }
        console.log(kaverit);
      }
        document.getElementById('nimi').value = '';
        document.getElementById('demo').innerHTML = '1. ' + kaverit[0];
        document.getElementById('demo2').innerHTML = '2. ' + kaverit[1];
        document.getElementById('demo3').innerHTML = '3. ' + kaverit[2];
        document.getElementById('demo4').innerHTML = '4. ' + kaverit[3];
        document.getElementById('demo5').innerHTML = '5. ' + kaverit[4];
        document.getElementById('demo6').innerHTML = '6. ' + kaverit[5];
        document.getElementById('demo7').innerHTML = '7. ' + kaverit[6];
        document.getElementById('demo8').innerHTML = '8. ' + kaverit[7];
        document.getElementById('demo9').innerHTML = '9. ' + kaverit[8];
        document.getElementById('demo10').innerHTML = '10. ' + kaverit[9];
    }



function Järjestä(){
kaverit.sort();
document.getElementById('nimi').value = '';
document.getElementById('demo').innerHTML = '1. ' + kaverit[0];
document.getElementById('demo2').innerHTML = '2. ' + kaverit[1];
document.getElementById('demo3').innerHTML = '3. ' + kaverit[2];
document.getElementById('demo4').innerHTML = '4. ' + kaverit[3];
document.getElementById('demo5').innerHTML = '5. ' + kaverit[4];
document.getElementById('demo6').innerHTML = '6. ' + kaverit[5];
document.getElementById('demo7').innerHTML = '7. ' + kaverit[6];
document.getElementById('demo8').innerHTML = '8. ' + kaverit[7];
document.getElementById('demo9').innerHTML = '9. ' + kaverit[8];
document.getElementById('demo10').innerHTML = '10. ' + kaverit[9];
}

