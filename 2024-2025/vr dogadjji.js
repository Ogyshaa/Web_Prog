/*
Dva kljucna metoda vr dogadja je su:

setTimeout(zahteva fnk-iju,ms)
-izvrsava nako vremena koja je zadoto

setInterval(zahteva fnk-iju,ms)
--ponava izvravanje fnk-ije u periodu odredjenom ms

clearTimeout(promenljiva = prethodnoj fnk-iji)
--metod za zaustavljanje setTimeout-a

clearInterval(prom = pret fnk-iji)

*/

function lmao()
{
    alert('Zdravo. KLIKNI ME PONOVAO TATICE!!!');
}

function ocolock(){
    const d = new Date();
    document.getElementById("sat").innerHTML = d.toLocaleTimeString();
}
pom = setInterval(ocolock,1000);

/* */

function menja1(){
    document.getElementById("p1").innerHTML = 'U pomoc davim me';
}
function menja2(){
    document.getElementById("p1").innerHTML = 'Sve je ok ne davi me vise';
}
function menja3(){
    document.getElementById("p1").innerHTML = 'E ubi me';
}

setTimeout(menja1,2000)
setTimeout(menja2,4000)
setTimeout(menja3,6000)

/* */

function startTime(){
    const d = new Date();
    let h  = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    //m = check(m);
    //s = check(s);
    document.getElementById('txt').innerHTML = h + ' : ' + m + ' : ' + s; 
    setTimeout(startTime,1000); // nacin da se vreme svake sek azurira
}

/*function check(i){
    if(i<10){
        i = '0' + i;
        return i;
    }
}*/

/*Napravi fnk u js koja prikazuje odlozeno izvrsavanje tume out i to nako
sto liknemo da dugme */

function noviTxt(){
    document.myform.MYTEXT.value ='Domega';
    setTimeout('drugitext()',1000);
}

function drugitext(){
    document.myform.MYTEXT.value ='sve je in the best redu';
}

/*napisati fnk u js koja u txt polju Implementira brojac za 1 nakon svake 2 s */
// koristie ugradjeni metod setInterval()
let br = 0;
function brojimiSE(){
    br++;
    document.getElementById('pp').innerHTML = br;
}

setInterval('brojimiSE()',2000);


