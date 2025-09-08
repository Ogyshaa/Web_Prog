// naziv klase
class ImeKlase
{
    constructor (parametarkonstrukotra1, parakon)
    {
        this.parametarkonstrukotra1 = parametarkonstrukotra1;
        this.parakon = parakon;
    } 
}

let obj = new ImeKlase("para1", "para2");

function pas1(ime, rasa, tezina, boja)
{
    this.ime = ime ;
    this.rasa = rasa;
    this.tezina = tezina;
    this.boja = boja;
}

let dog1 = new pas1("dzeki", "majmun", "50kg", " gorila");

class Pas{
    constructor(ime, rasa, tezina, boja)
    {
        this.ime = ime ;
    this.rasa = rasa;
    this.tezina = tezina;
    this.boja = boja;
    }
}
let dog  = new Pas("dzeki", "majmun", "50kg", " gorila")

console.log("Bla bla bla", dog.rasa );

class Covek{
    constructor(ime, prezime)
    {
        this.ime = ime;
        this.prezime = prezime;
    }
}

let cuvek = new Covek("Goran", "Sindjelic")
console.log("Danas je ",cuvek.ime,"jeo sarmu");

let osoba = new Covek("Dino"); // drugi parametar undefinde
console.log(osoba);

class Covek1{
    constructor(ime='Slavica' ,prezime='Savic')
    {
        this.ime = ime;
        this.prezime = prezime;
    }
    ispis()
    {
        console.log('Hi bitch')
    }
}

let osoba2 = new Covek1("MAREEEEEEEEEEEEEEEE");
console.log(osoba2.ime, osoba2.prezime);
osoba2.ispis();
let osoba3 = new Covek1("MAreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","Nikolic");
console.log(osoba3.ime, osoba3.prezime);

class Covek2{
    constructor(ime, prez)
    {
        this.ime =  ime;
        this.prez = prez;
    }
    pozdrav()
    {
        console.log('cao '+ this.ime);
    }
}
let osboa4 = new Covek2("prea", "peric")
osboa4.pozdrav();

/*Napraviti klasu sa nazivom osoba i dodeliti joj konstruktor za ime i prezime 
keirati promenjivu i dodeliti vrednost novom objektu osoba koristici ime i prezime 
drugra pored sebe
kreirati jos jednu promenlivu drguraga iza sebe
uneti imena oba priljatelja u konzolu sa pozdravom zdravo*/

class Coek{
    constructor(ime , prez )
    {
        this. ime = ime;
        this.prez = prez;
    }
    poz()
    {
        console.log("Vozdra " + this.ime +' '+ this.prez);
    }
    PunoImePrezime(ime , prezime)
    {
        return ime + ' ' + prezime;
    }
}
let ime = prompt();
let prezime = prompt();

let drug1 = new Coek(ime, prezime);

let ime1 = prompt();
let prezime1 = prompt();

let drug2 = new Coek(ime1, prezime1);

drug1.poz();
drug2.poz();

let imence = drug1.PunoImePrezime(ime ,prezime);
console.log(imence);

let imence1 = drug2.PunoImePrezime(ime1 ,prezime1);
console.log(imence1);
//korisiteci prethodnu klasu dodati metod koji se zove PunoImePrezime 
//koji vraca vred ime i prezime kada ga pozovete

class Coek1{
    #ime ;
    #prezime ; 
    constructor(ime , prezime)
    {
        this.#ime = ime ;
        this.#prezime =prezime ;
    }
    get ime(){
        return this.#ime;
    } 
    set ime (ime){
        this.#ime = ime;
    }
    get prezime(){
        return this.#prezime;
    } 
    set prezime (prezime){
        this.#prezime = prezime;
    }
}

let p = new Coek1("Ksenija", " Tufonic");
console.log(p.ime, p.prezime);

class Vozila{
    constructor(boja, trBrz, maxBrz)
    {
        this. boja = boja;
        this. trBrz = trBrz;
        this. maxBrz = maxBrz;
    }
    kretanje()
    {
        console.log('Krecete se brzinom', this.trBrz);
    }
    ubrzanje(brzina)
    {
        this.trBrz += brzina;
    }
}
class Motori extends Vozila{
    constructor(boja ,trBrz, maxBrz, gorivo){
        super(boja, trBrz, maxBrz);
        this.gorivo = gorivo;
    }
    voznjaToc()
    {
        console.log('Vozite na JEDNOMM tocku :)');
    }
}

let motor = new Motori("crna", 0, 250, 'benzin');
console.log(motor.gorivo);
motor.ubrzanje(130);
motor.kretanje();

Covek.prototype.uvesti = function()
{
    console.log("Hej ja sam", this.ime);
}
Covek.prototype.omiljenjaBoja = 'Plavicasta';

let p1= new Covek('Janja', 'Velebit');
console.log(p1.omiljenjaBoja);

p1.uvesti();
