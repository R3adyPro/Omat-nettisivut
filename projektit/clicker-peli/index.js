
raha = 0;
lisaa = 1;
rahaSek = 0;    

kerroin = 2;

lHinta = 50  ;
wHinta = 500;
Bhinta = 5000;
tHinta = 15000;
dHinta = 50000;
rhinta = 100000;



function Testi(){
    raha += rahaSek;
    document.getElementById('rahat').innerHTML = "$" + raha;
    document.getElementById('one').innerHTML = "$" + wHinta;
    document.getElementById('two').innerHTML = "$" + Bhinta;
    document.getElementById('tree').innerHTML = "$" + tHinta;
    document.getElementById('four').innerHTML = "$" + dHinta;
    document.getElementById('five').innerHTML = "$" + rhinta;
    document.getElementById('six').innerHTML = "$" + rahaSek + "/s"
    document.getElementById('seven').innerHTML = "$10/s";
    document.getElementById('eight').innerHTML = "$25/s";
    document.getElementById('nine').innerHTML = "$50/s";
    document.getElementById('ten').innerHTML = "$250/s";
    document.getElementById('eleven').innerHTML = "$500/s";
}

var cancel = setInterval(Testi, 1000);





function Money(){
    raha = raha + lisaa;
    document.getElementById('rahat').innerHTML = "$" + raha;

}

function LisaaYksi(){
    if(raha >= lHinta){
        lisaa = lisaa + 1;
        raha = raha - lHinta;
        lHinta = lHinta * kerroin;
    }  
    document.getElementById('rahat').innerHTML = "$" + raha; 
}




function Wing(){
    if(raha >= wHinta){
        raha = raha - wHinta;
        wHinta = wHinta * kerroin
        rahaSek = rahaSek + 10;
    }
}

function Bumper(){
    if(raha >= Bhinta){
        raha = raha - Bhinta;
        Bhinta = Bhinta * kerroin
        rahaSek = rahaSek + 25;
    }
}

function Tyres(){
    if(raha >= tHinta){
        raha = raha - tHinta;
        tHinta = tHinta * kerroin
        rahaSek = rahaSek + 50;
    }
}

function Diffuser(){
    if(raha >= dHinta){
        raha = raha - dHinta;
        dHinta = dHinta * kerroin
        rahaSek = rahaSek + 250;
    }
}

function Rims(){
    if(raha >= rhinta){
        raha = raha - rhinta;
        rhinta = rhinta * kerroin
        rahaSek = rahaSek + 500;
    }
}