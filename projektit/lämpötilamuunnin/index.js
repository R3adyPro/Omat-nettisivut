


function Muunna(){
    lampoMuutosJaDesimaali()
    document.getElementById('lampo').value = '';

}



function lampoMuutosJaDesimaali(){
    lampotila = document.getElementById('lampo').value;
    let valinta = document.getElementById('asteet');
    let valittuArvo = valinta.options[valinta.selectedIndex].value;
    let testi = /^[0-9-.,]+$/.test(lampotila);

    

    if(document.getElementById('1').checked){
        if(testi == false){
            document.getElementById('demo').innerHTML = 'Vain lukuarvoja'
        }
        else if(valittuArvo == 'faren'){
            if(lampotila > -273.151){
                let x = lampotila*1.8+32;
                x = x.toFixed(1);
                document.getElementById('demo').innerHTML = x + ' °F';
                }
                else if(lampotila < -273.151){
                    document.getElementById('demo').innerHTML = 'Luku on pienempi kuin nollapiste';
                }
            }

        else if(valittuArvo == 'celcius'){
            if(lampotila > -459.671){
                let x = (lampotila-32)/1.8;
                x = x.toFixed(1);
                document.getElementById('demo').innerHTML = x + ' °C';
                }
            }
            else if(lampotila < -459.671){
                document.getElementById('demo').innerHTML = 'Luku on pienempi kuin nollapiste';
            }
        }




    else if(document.getElementById('2').checked){
        if(testi == false){
            document.getElementById('demo').innerHTML = 'Vain lukuarvoja'
        }
        else if(valittuArvo == 'faren'){
            if(lampotila > -273.151){
                console.log(lampotila)
                let x = lampotila*1.8+32;
                x = x.toFixed(2);
                document.getElementById('demo').innerHTML = x + ' °F';
                }
                else if(lampotila < -273.151){
                    document.getElementById('demo').innerHTML = 'Luku on pienempi kuin nollapiste';
                }
            }

        else if(valittuArvo == 'celcius'){
            if(lampotila > -459.671){
                let x = (lampotila-32)/1.8;
                x = x.toFixed(2);
                document.getElementById('demo').innerHTML = x + ' °C';
                }
            }
            else if(lampotila < -459.671){
                document.getElementById('demo').innerHTML = 'Luku on pienempi kuin nollapiste';
            }
        }





    else if(document.getElementById('3').checked){
        if(testi == false){
            console.log(testi)
            document.getElementById('demo').innerHTML = 'Vain lukuarvoja'
        }
        else if(valittuArvo == 'faren'){
            if(lampotila > -273.151){
                console.log(lampotila)
                let x = lampotila*1.8+32;
                x = x.toFixed(3);
                document.getElementById('demo').innerHTML = x + ' °F';
                }
                else if(lampotila < -273.151){
                    document.getElementById('demo').innerHTML = 'Luku on pienempi kuin nollapiste';
                }
            }

        else if(valittuArvo == 'celcius'){
            if(lampotila > -459.671){
                let x = (lampotila-32)/1.8;
                x = x.toFixed(3);
                document.getElementById('demo').innerHTML = x + ' °C';
                }
            }
            else if(lampotila < -459.671){
                document.getElementById('demo').innerHTML = 'Luku on pienempi kuin nollapiste';
            }
        }
    
    }
