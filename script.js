class Kerina{
    constructor(parametar1,parametar2){
        this.parametar1=parametar1;
        this.parametar2=parametar2;
    }


}

let objekat = new Kerina(12,"Kuče");

function pas1(ime,rasa,tezina,boja)
{
    this.ime=ime;
    this.rasa=rasa;
    this.tezina=tezina;
    this.boja=boja;
}

let god1= new pas1("Džeki","Pudlica",2,"bela");

class Pas{
    constructor(ime,rasa,tezina,boja)
    {
    this.ime=ime;
    this.rasa=rasa;
    this.tezina=tezina;
    this.boja=boja;
    }
}

let dog=new Pas("Džeki","Pudlica",2,"bela");

console.log("Hej, danas sam dobila psa. Zove se:",dog.ime);

class Covek{
    constructor(ime,prezime)
    {
        this.ime=ime;
        this.prezime=prezime;
    }
}

let persona=new Covek("David","Milosevic");
console.log("danas je",persona.ime,"seo u prvu klupu,",persona.ime,persona.prezime);
let osoba1 = new Covek("Damnjan");
console.log(osoba1);

class Covek1{
    constructor(ime,prezime="Savic")
    {
        this.ime=ime;
        this.prezime=prezime;
    }
}
let osoba2= new Covek1("Djordje");

console.log(osoba2);

let osoba3 = new Covek1("Djordje","Nedimovic");
console.log(osoba3);
/*class Covek2{
    constructor(ime,prezime)
    {
        this.ime=ime;
        this.prezime=prezime;
    }
    pozdrav(){
    conos.log("cao"+this.ime)
    };
}
*/
//let osoba4 = new Covek2("Pera","Peric");
//Ognjenosoba4.pozdrav();

/*napraviti klasu sa nazivom osoba i dodeliti joj konstruktor za ime i  prezime
kreirati promenljivu i dodeliti vrednost novom objektu objektu osoba koristeci ime i prezime
dugara pored sebe
kreirati jos jednu promenljivu drugara iza sebe, uneti imena oba prijatelja u kozolu sa pozdarvom zdravo*/

/*class Osoba{
    constructor(ime, prez){
        this.ime=ime;
        this.prez=prez;
    }

    pozz(){
        console.log("Cao",this.ime,this.prez);
    }
}
let drug1=new Osoba(prompt("Unesi ime prvog"),prompt("Sad prezime"));
drug1.pozz();
let drug2=new Osoba(prompt("Unesi ime drugog"),prompt("Sad prezime"));
drug2.pozz();

//koristeci klasu koju ste napravil dodati metod koji se zove puno ime i prezime
//koji vraca vrednosti ime i prezime kada ga pozovete
*/
class Osoba1{
    constructor(ime, prez){
        this.ime=ime;
        this.prez=prez;
    }

    pozz(){
        console.log("Cao",this.ime,this.prez);
    }
    puno_ime_prezime(drug,drug3)
    {
        return drug + ' ' + drug3;
    }
}

let ime1=prompt("Unesi ime prvog");
let prez1=prompt("Unesi prez");

let ime2=prompt("Unesi ime drugog");
let prez2=prompt("Unesi prezime");

let covek10 =new Osoba1(ime1,prez1);
let puno = covek10.puno_ime_prezime(ime1 , prez1);
console.log(puno);
let covek11 = new Osoba1(ime2,prez2);
let puno1 = covek11.puno_ime_prezime(ime2,prez2);
console.log(puno1);
