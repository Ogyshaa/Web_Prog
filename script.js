/*1.napisti fnkciju u js u kojoj na osnvu niza od 6 razlicitih cictata i autora,
ispisuje na stranici po jedan citat, ali da se citati promeni kada se osvezi stranica
Math.radnom() */

let j='daaaaaa';
let d='dasfr';
let t='gfdg';
let c='dwer';
let p='qdssa';
let s='htrhf';

let niz=[j,d,t,c,p,s];

let j1='daaaaaa';
let d1='dasfr';
let t1='gfdg';
let c1='dwer';
let p1='qdssa';
let s1='htrhf';

let niz1=[j1,d1,t1,c1,p1,s1];

function citat(){
    let n = Math.floor(Math.random()*10);
    console.log(niz[n],niz1[n] );    
};
citat();

/*2.Nadaovezati string DRUGARI na dati string ZDARAVO. Postaviti da su sva slova velika u novom stringu 
String drugarau zameniti stringom ti i nadovezari string ti si fenomenalan */



/*3. Izmanipuliati sledeci string tako da dobijete znakovni niz sa prvim velikim slovom ostala malim slovim 
Recenica je 'ovO ce bIti odrAdjeNo za svaku rec' u recenicu 'Ovo Ce Biti Odradjeno Za Svaku Rec*/

let tada = 'ovO ce bIti odrAdjeNo za svaku rec';
const rec = tada.split(' ');
console.log(rec);

function VelikoSlovo(str){
    str = str.toLowerCase();
    const tempN=[];
    let reci = str.split(' ');
    reci.forEach(rec => {
        let temp = rec.slice(0,1).toUpperCase() + rec.slice(1);
        tempN.push(temp);
    });
    return tempN.join(' ');
}
console.log(VelikoSlovo(tada));

/*Koristeci metod zankovnog niza replacae zameniti samoglasnike u sledecoj recenici 'Ja volim JavaSscrip' 
recenicu j0 v3l2m j0v0scr2pt */

const tananana= 'Ja volim JavaSscrip';
let niz3= tananana.split(' ');
for(let i = 0; i<niz3.length;i++)
{
    niz3[i]= niz3[i].replace('a',0);
}
console.log(niz3.join(' '));

/*Napisati funkciju koja ce iz niza const niz= [Cao, svete,zdrabo, caocao, cao ,cao , svete, cao];
izdovjiti sledeci niz [cao, cao svete] koristeci metod filter[] */

const niz4 = ['Cao', 'svete','zdrabo', 'Caocao', 'cao' ,'cao svete','Cao'];
const niz5 = niz4.filter((e,index) => {
    let e2 = e.substring(0,3)
    return e2 ==='cao';
})

console.log(niz5);

/*6. Napisi funkciju koja uzima jedna karataer string duz 1 i vraca true ako je taj kareakte samogllaskin
a flase ako je suglasnik */

function samoglasniki(){
    let slovo = prompt('Unesi slovo');
let smaogls = ['a','e','i','o','u'];
    if(slovo.length <2 && slovo.length >0)
    {
        for (let i = 0; i<smaogls.length;i++)
        {
            if(slovo === smaogls[i])
                return 'true';
            else return 'false';
        }
    }
    else return('Nuh uh');
}
console.log(samoglasniki());

/*Defenisi funkciju revers() koja vrac string u obrnustom redosledu karaketera. 
npr revers('moj t') treba da vrati obrnuto */


function revers(strr){
    let strr1= 'Lepo te pitam sto se deres!';
    let str;
    for (let i = 0; i<strr.length;i++)
    {
        strr1+=strr[strr.length-1-i];
    }
console.log(strr1);
}
revers()














