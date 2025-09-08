// kreiranje niza
//1. new Array
//2.[]

let niz1= [1,2,3,10]; // niz od 4 elemenata
let niz2= new Array(10); //prazan niz od 10 elemenata

console.log(niz1);
console.log(niz2);

// pristup elementima 
let automobili= ["Toyora", "Alfa Romeo", "Renault", "BMW", "Volvo","Volkswagen"];
console.log(automobili[4]);

console.log(automobili[6]); // undefined :(
console.log(automobili[-1]); // undefined :(

// menjanje elemenata niza

automobili[0] = "KIA";
console.log(automobili);

automobili[5] = "Tesla";
automobili[-1] = "Fiat";
console.log(automobili);

//metode nizova

//Dodavanje elementa nizu

//dodavanje elemta na kraj niza - push()
// u sredini - splice()
// niz u niz - concat()

let omiljenoVoce = ["grejpfurit", "mango", "narandza", "mandarina", "jagode"]

omiljenoVoce.push("tresnje");
omiljenoVoce.push("banana");

console.log(omiljenoVoce);

let oblici = ["kvadrat",'Marko','trougao','paralelogram','krug'];
oblici.splice(2,0,"Nikola",'deltoid'); //1 pozicija, 2 od pozicije koje brisem, 3 element
console.log(oblici);

// concat()

let br1 = [1,2,3];
let br2 = [4,5,6];
let br3 = br1.concat(br2);
console.log(br3);

//brisanje elemenata

// brisanje poslednjeg - pop()
let niz3 =[1,2,3,4,5,6,7,8,9];
niz3.pop();
console.log(niz3);

// brisanje prvog ele - shift()

niz3.shift()
console.log(niz3);

//
niz3.splice(1,3);
console.log(niz3);

//

delete niz3[1];
console.log(niz3);

// pronalazenje elemenata - find()

let niz4 = [2,6,7,2,8,2];

let p= niz4.find(function(e){
    return e === 6;
})
console.log(p);

/*let grejpfurit= niz4.find(function(e){
    return e === 12;
})
console.log(grejpfurit);*/ // vraca undefind

//strlicast nacin

let n = niz4.find(e => e===6)

console.log(n);

// indexOf() - vraca index ako vrednost postoji, ako ne postoji vraca -1

let fien1= niz4.indexOf(6);
let fien2 = niz4.indexOf(9);

console.log(fien1, fien2);

let fien3= niz4.indexOf(2,1);
console.log(fien3);

let fien4 = niz4.lastIndexOf(2);
console.log(fien4);

niz4.sort();
console.log(niz4);
omiljenoVoce.sort();
console.log(omiljenoVoce);

niz4.reverse();
console.log(niz4);
omiljenoVoce.reverse();
console.log(omiljenoVoce);

// vise dimenzijalni nizovi

let niz =[1,2,3];
let niiz = [4,5,6];
let nizz = [7,8,9];
let nizNizova = [niz,niiz,nizz];
console.log(nizNizova);
let nizNizova2 = [[1,2,3],[4,5,6],[7,8,9]];

let vrednost1 = nizNizova[0][0];
console.log(vrednost1);

console.log(nizNizova[1][1]);

let nizzz =[nizNizova,nizNizova2,nizNizova];
console.log(nizzz);
console.log(nizzz[2][2][0]);

// objekti 

let pas = {
    ime: "Lea",
    rasa: "chivava",
    tezina: 2.5,
    boja: "belo-narandzasta",
    godine: 8
};
//prisup svojstvima

let bojaPsa = pas["boja"];
console.log(bojaPsa);

let bojaPsi = pas.boja;
console.log(bojaPsi);

// menjanje vrednosti

pas["boja"] = "NIGGER";
pas.tezina = 2.3;

console.log(pas.boja, pas.tezina);
console.log(pas);

// objekti u objektima

let komapnija = {
    ime:"HBO",
    pocetakRada: 1987,
    adresa: {
        ulica: "Dimitrije Davidovic",
        broj: 16,
        ptt: 11300,
        grad: 'Smederevo',
        drzava: 'Republjika Kosova'
    }
};
komapnija.adresa.ulica = "Cara DUsana";
komapnija["adresa"]["broj"] = 10;
console.log(komapnija.adresa);
// nizovi u objektima


let komapnija1 = {
    ime:"HBO",
    pocetakRada: 1987,
    aktivnosti: ["filmovi","serije","crtaci"],
    adresa: {
        ulica: "Dimitrije Davidovic",
        broj: 16,
        ptt: 11300,
        grad: 'Smederevo',
        drzava: 'Republjika Kosova'
    }
};

console.log(komapnija1.aktivnosti[2]);

// objekti u nizovima

let adrese= [
    {
        ulica: "Dimitrije Davidovic",
        broj: 16,
        ptt: 11300,
        grad: 'Smederevo',
        drzava: 'Republjika Kosova'
    },
    {
        ulica: "Dimitrije Davidovic",
        broj: 16,
        ptt: 11300,
        grad: 'Smederevo',
        drzava: 'Republjika Kosova'
    },
    {
        ulica: "Dimitrije Davidovic",
        broj: 16,
        ptt: 11300,
        grad: 'Smederevo',
        drzava: 'Republjika Kosova'
    }
];
console.log(adrese[0].ulica);

//Objketi u nizvoima u objektima

let komapnija2 = {
    ime:"HBO",
    pocetakRada: 1987,
    aktivnosti: ["filmovi","serije","crtaci"],
    adresa: [
        {
            ulica: "Cara Lazara",
            broj: 120,
            ptt: 11300,
            grad: 'Smederevo',
            drzava: 'Republjika Kosova'
        },
        {
            ulica: "7. Juli",
            broj: 1,
            ptt: 11300,
            grad: 'Smederevo',
            drzava: 'Republjika Kosova'
        },
        {
            ulica: "Dimitrije Davidovic",
            broj: 10,
            ptt: 11300,
            grad: 'Smederevo',
            drzava: 'Republjika Kosova'
        }
    ]
};

console.log(komapnija2.adresa[0].ulica);

const lista = ["Luka","Nikolic", true, 35, null, undefined, 
    {test:'jedan', poeni :15}, ['jedan', 'dva']];
// koriguj i napravi sledeci niz
/*["PRVI", "Luka", "Srednji", "Zdravo drugari", "Poslednji"]*/

lista.splice(1,7)
lista.push("SREDNJI","Zdravo drugari", "POSLEDNJI");
lista.splice(0,0, "PRVI")
console.log(lista);

