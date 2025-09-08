let a =4, b=2;

console.log(a+b);

let str1="Zdravo";
let str2="drogosi";

console.log(str1+' '+str2);

//oduzimanje

console.log(a-b);
console.log(a-str1);
console.log(str1-str2);

//mnozenje

console.log(a*b);
console.log(a*str1);

// deljenje

console.log(a/b);
console.log(a/str1);

// stepenovanje su **

console.log(a**2);
//
console.log(Math.pow(a,2));

//moduo %5
console.log(a%b);
let a1=5,b1=3;
console.log(a1%b1);
//unarni operator: inkrement ++ i dekre5ment --

let c = 5;
c++;
console.log(c);
c--;
console.log(c);

//su6fiks c++;
let a2 = 8;
console.log(a2--);
console.log(a2);
//prfiks ++c;
let b2=8;
console.log(++b2);

/*1. Pomocu promt ugradjenig metoda uneti deve stranice
pravouglog trougla i izracunati trecu*/

let at,bt;
let ct;
at=prompt('Stranica a');
bt=prompt('Stranica b');
console.log(Math.round(ct=((at**2)*1.0+bt**2)**0.5));

//alert(Math.round(ct=(at**2+bt**2)**0.5)*1.0);
// slabo poredjenje == samo vrednost
// jako poredjenje === vrednost i tip
//!= slobo poredjenje nejednakosti vrednost
// !== jako poredjenje nejednakosti vrednost i tip

// logicki operatori
/*
and &&
or ||
not !
*/
// &&

let x=1,y=2,z=3;
console.log(x<y && y<z);
console.log(x<y && y>z);

// ||

console.log(x>y || y<z);

// !

let r=false;
console.log(!r);

/*----------------*/
//if 
/*
if(uslov)
{
    comand
}
    else
{
    comand}
*/

/*Ispitti da li je osoba punoletna na odnosu unetih godina*/ 

let god;
god=prompt("Unesite koliko ste stari")
if(god<18 && god==0)
{
    alert("Maloletnik");
}
if(god<0)
{
    alert ("error");
}
else alert('Punoletni');

/*if else if
if(uslov)
{
    naredbe;
}
    else if(uslov)
{
    naredbe;
}
    else if(uslov)
{
    naredbe;
}
    else(uslov)
{
  naredbe;   
}
*/
// uslov ? naredba1:naredba2;
k>17? alert('punoletna osoba'):alert('Maloletna osoba')//ternarni za jedan uslov
/*Od zavisnosti od unetih godina ispisati 
koliko osoba treba da plati kartu
3< ne placa
3> && 12< 50din
12> && 65< 100din
65>+ 70din*/


god=prompt('Koiko ste stari?');
if(god<3)
{
    alert('Ulaz je besplatan za mladje od 3');
}
else if(god>=3 && god<12)
{
    alert('Karta je 50 dinara');
}
else if(god>=12 && god<=65)
{
    alert('Karta je 100 din');
}
else
{
    alert('KArta je 70 din');
}


//Switch 

/*
switch(uslov)
{
    case vred1:
        naredba; break;
    
    case vred2:
        naredba; break;

    case vred3:
        naredba; break;

    case vred4:
        naredba; break;
    default:
        naredba; break;
}
*/

//while
/*
    while(uslov)
{
    naredbe;    
}
*/  

let i=0;
while(i<=10)
{
    console.log(i);
    i++;
}

//do while
/*
do{
naredbe;
}
while(uslov);
*/


let k;
do{
    k=prompt('Unesite br izmedju 0 i 100');
    console.log(k);
}
while(!(k>=0 && k<=100));


//for 
/*for(inicialna vred;uslov;uvecavanje vred)
{
    naredbe;
} */
/*6
for(let j=0;j<10;j++)
{
    console.log(j);
}*/

/*Ispitati sve br deljve sa 3 od 0 do 1000 a ispisati one koji 
su deljivi sa 3 od 0-10 */
let k1;
let s=3;
for(k1=0;k1<1000;k1+=s)
{
    if(k1>10){break;}
    console.log(k1);
}
/*U zavisnosti od ocene ispisati poruku:
1-nedovoljana
2-dovoljan
3-dobar
4-vrlo dobar
5-odlican
*/


let ocene = Number(prompt('Unesi ocenu'));
switch(ocene)
{
    case 1: alert('Nedovoljan'); break;
    case 2: alert('Dovoljan'); break;
    case 3: alert('Dobar'); break;
    case 4: alert('Vrlo Dobar'); break;
    case 5: alert('Odlican'); break;
    default: alert('Ne5ocenjen'); break;
}

/*Unsei dva broj i ispitait koji je manji*/

let l= Number(prompt('Unesi prvi br'));
let p= Number(prompt('Uneti drugi br'));

l>p? alert('prvi je maksimum'):alert('Prvi je minimum');
/*Odrediti zbir svih neparnih dvocifrenih br */

let d=0;
for(let h=1;h<100;h+=2)
{
    d+=h;
    
}
console.log(d);
