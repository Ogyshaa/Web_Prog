/*
function naziv()
{
    telo fnkcije;
}
*/

//
function ime()
{
    a=prompt('Unesi svoje ime: ');
    console.log(':)'+' '+ a);
}
ime();
//
function zbir(a , b) // nije potrebno da se pise tip u javascript-u
{
    let sum = a+b;
    //prvi nacin
    console.log(sum);
    // drugi nacin
    //console.log(a+b);
}
zbir(2,5); //obavezno uneti vrednosti u pozivu
zbir(); // printuje NaN
//
function saberi (x=2,y=3) //vrednosti mogu da se i upisu i kada se deklarise funkcija
{
    console.log(x+y);
}
saberi();
saberi(6,6); // ako se u pozivu upise nova vrednost sistem koriste nove vrednosti
saberi(10); // ako se upise nova vrednost samo za jedan parametar prvi ce samo imati tu vrdnost
saberi(1,2,3,4); // javascrip ignorise vise parametra koji nisu deklarisani za to treba operator 

// operator rest one su ove tri tacke i drugi arametar posatje niz
function nekaFunkcija(parametar1,...parametar2)
{
    console.log(parametar1,parametar2)
}
nekaFunkcija("Cao",'Hej','hej','kako si ?'); //sve posle Cao je drugi parametar koji je niz

//operator spread; deklarise niz i tri tacke se upisuju u poziv
function saberi1(x,y)
{
    console.log(x+y);
}
let niz=[3,4];
saberi1(...niz);

//strelicaste funkcije
//(parematr1,parametar2) => telo funkcije; -sa parametarima 

//() => telo funkcije; - bez parametara

//parametar => telo funkcije - sa jednim parametrom

// saberi funkcija u streilcastom obliku
let sabaeriDvaBroja = (x,y) => console.log(x+y);
sabaeriDvaBroja(2,3);

// funkcije sa povratnom vrednoscu
function saberi2(x,y)
{
    return x+y;
}
let sabrano = saberi2(2,5);
console.log(sabrano);

// strelicast oblik
let sabranostrlica = (x,y) => x+y;
let rezultat = sabranostrlica(5,6);
console.log(rezultat);

// lokalni/globalni parametar
let x1='globalna';
function lokglob(y)
{
    let x='Lokalna';
    console.log(x,y);

}
console.log(x1);
lokglob(x1); /*Nesto je kenjala za ovaj y parametar u pocetku deklarisanja funkcije                
da ispise vrednost globalnog parametra */

// IIFE nacin ispisivanja
(function()
{
    console.log('IIFE');
})(); // ovim nacinom umesto da pisemo ime i da je pozivamo stavimo je izmedju dve zagrade i poziv se vrsi tako sto napisemo ()

// strelicast nacin IIFE ispisivanja
(()=>{
    console.log('Cao NARKOSI');
})();

//rekurzivna funkcija

/*function fakotirujal(n){
    if(n==0|| n==1) return 1;
    while(n>0)
    {
        n=n*n-1;
        n--;
    }
}
    ovo nije rekuzivna funkcije, to nam je napisala koako se racuna faktorijel*/

function faktorijel(n)
{
    if (n==1 || n==0) return 1;
    return faktorijel(n-1)*n;
}
console.log(faktorijel(5));

// ZADACI ---
// Obim za pravougaonik

let obim= (a,b) => 2*(a+b);
console.log(obim(5,2));
// hipotenuzu trougla 

let hip= (a,b) => Math.sqrt(a**2+b**2);
console.log(hip(3,4));

