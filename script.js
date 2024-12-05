/*function  poruka()
{
    alert(`This message will live one 4 EVA! Wakanda 4 EVA`)
}*/
let x= 1.2345678900;
console.log(isNaN(x)); // da li je nesto br
console.log(Number.isInteger(x)); // da li je nesto ceo br
console.log(isFinite(x)); //da li je nesto koncno

console.log(`Zaokluzi na 2 decimale ${x.toFixed(2)}, Zaokluzeno na 3 decimale ${x.toPrecision(4)}`);

//math metod za zaokruzivanje br
/*
math.roudn(k) - k je zaokruzeno na najblizi br
math.ceil(k) - k je zaokruzeno na najblizi br
math.floor(k) - k je zaokruzeno na najblizi br
math.trunc(k) - vraca ceo deo k
*/

let br1 = 6.78;
let br2 = 5.34;

console.log(`br1: ${br1}, postaje ${Math.round(br1)}, round`);
console.log(`br2: ${br2}, postaje ${Math.round(br2)}, round`);

console.log(`br1: ${br1}, postaje ${Math.ceil(br1)},ceil`);
console.log(`br2: ${br2}, postaje ${Math.ceil(br2)},ceil`);

let nbr1 =-6.78
let nbr2=-5.34;

console.log(`nbr1: ${nbr1}, postaje ${Math.ceil(nbr1)},ceil`);
console.log(`nbr2: ${nbr2}, postaje ${Math.ceil(nbr2)},ceil`);


console.log(`br1: ${br1}, postaje ${Math.floor(br1)},floor`);
console.log(`br2: ${br2}, postaje ${Math.floor(br2)},floor`);

console.log(`nbr1: ${nbr1}, postaje ${Math.floor(nbr1)},floor`);
console.log(`nbr2: ${nbr2}, postaje ${Math.floor(nbr2)},floor`);


console.log(`br1: ${br1}, postaje ${Math.trunc(br1)},trunc`);
console.log(`br2: ${br2}, postaje ${Math.trunc(br2)},trunc`);

/*
math.sqrt(k) - koren k
math.pow(k,i) -stepen k na i
math.sign(k) - vraca znak
math.abs(k) - absolutna vrednost
math.log(k) - logoritam
math.exp(k) - e na k
math.random() - nasumicna vrednost od 0 do 1
math.min() -min
math.max() - max
*/
let max = Math.max(2,56,12,1,233,3)
let min = Math.min (2,56,12,1,233,3)
console.log(max,min);
let k= Math.sqrt(36);
let p = Math.pow(2,5);
console.log(k, p);
let y= 2;
console.log(Math.exp(y), 'exp')
console.log(Math.log(y),'log')
console.log(Math.log(Math.exp(2)));

/*broj 5,7 zaokruziti pomocu ugradjenih metoda math.ceil, floor i round izbaciti jedan rand br
ispisti jedan br od 0 - 10 broj 1 - 10 i od 1 -100 
kreirajti funk za ispisivanje slucajnog broj pomocu min i max pokrenuti tu funckiju 100x vracajuci u knozolu 
slucajna br od 1 - 100 svakog puta*/

let n = 5.7;
console.log(Math.ceil(n))
console.log(Math.floor(n))
console.log(Math.round(n))


console.log(Math.floor(Math.random()*11));
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*100)+1);

function sluc(min ,max){
    return Math.floor(Math.random()*(max-min +1)) +min;
}
for(let i =0; i<=100;i++ )
    {
        console.log(sluc(0,100));            
    }

//datum
/*za kreiranje datum koristimo metod Date()*/
let trVreme= new Date();
console.log(trVreme)

let sadasnje = Date.now() //za sadsnje vreme
console.log(sadasnje)

let specif = new Date('Sat Jun 05 2021 11:07:34 GMT+200 ');
console.log(specif)

let specif2= new Date(2022,1,10,12,10,15,100);
console.log(specif2)

// metodi za dobijanje i postavljanje vremena

let d = new Date()
console.log('Dan u nedelji', d.getDay())
console.log('Dan u mesecu', d.getDate())
console.log('Mesec', d.getMonth())
console.log('godina', d.getFullYear())
console.log('sekunde', d.getSeconds())
console.log('Milis', d.getMilliseconds())
console.log('vreme', d.getTime())

// promen datuma
// promena godine
d.setFullYear(2010);
d.setMonth(9);
d.setDate(10);
d.setHours(10);
console.log(d);

d.setTime(21425124321);
console.log(d);

let d1 = Date.parse('Jan 2, 1970')
console.log(d1);

let d2 = Date.parse('6/5/2000');
console.log(d2)

console.log(d.toDateString())

//Zadatak napraviti tajmer 

const zavrsniDatum = 'Jan 1 2025';

function odbrojvanje(){
    const total = Date.parse(zavrsniDatum) - new Date();
    const day = Math.floor(total/(1000*60*60*24));
    const hrs = Math.floor((total/(1000*60*60))%24);
    const mins = Math.floor((total/(1000*60))%60);
    const s = Math.floor((total/(1000))%60);
    return {
        day,
        hrs,
        mins,
        s
    };
}
function uptd(){
    const temp = odbrojvanje();
    let ispis=" ";
    for(const x in temp)
    {
        ispis +=(`${x}: ${temp[x]}`);
    }
    console.log(ispis);
    setTimeout(uptd, 1000); // svake s pozva fnk updt
}
uptd();









