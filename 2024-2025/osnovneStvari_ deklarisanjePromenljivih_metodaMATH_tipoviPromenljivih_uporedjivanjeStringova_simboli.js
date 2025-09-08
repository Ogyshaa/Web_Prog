alert("Dobar vrisak za dobro jutro");
console.log("Dobar dni");

//jednolinijski comment
/*
ove je multipla line komentar 😎
*/ 

let a = 10;
console.log(a);

prompt("what are you how you do do do???");

console.log(Math.floor(Math.random()*100));

//0.01*100=1
//metod za zaokruzivanje Math.floor

/*
let - opseg vidljivosti bloka
var - opseg vidljivosti sve
const 
*/
//--
/*
var a = 9;
function tac()
{
     a ="lmao";

}
*/

const pi=3.14;
// cant change ❌ pi=22/7;
console.log(pi);

let b= "string";
var c= 32;

// stirng 

let jednostruki='ja mislim da nije jednostruki, e sad je';
let dvostruki="ovo suu dvostruki";

console.log(jednostruki);
console.log(dvostruki);

//let jezik="Javascript";
let jezik="C#";
let obrnuti_Polunavodnici=`Volim da jem sarmu ${jezik}`;

console.log(obrnuti_Polunavodnici);

//number

let br=6;
let br1=5.3; //deci
let br2=7e2; // eksponecialni
let br3=0x6; // hex
let br4=0b101; // bin
let br5=12345678897654n; //big int

//BOOLEAN

let bool1=true;
let bool2=false;
console.log(bool1);
console.log(bool2);

// symbol

let  str1="ja volim ovaj predmet, ne";
let str2="ja volim ovaj predmet, ne";

console.log("Ova 2 stringa su jednaka", str1===str2);
//--
let sym1=Symbol("ja volim ovaj predmet, ne");
let sym2=Symbol("ja volim ovaj predmet, ne");

console.log("Ova 2 stringa su jednaka", sym1===sym2);

// undefined & null

let ime;

let nuh_uh= undefined;
let yuh_uh=null;

console.log("same dif name", ime===nuh_uh);
console.log("not same and dif name", ime===yuh_uh);

// typeof

console.log(typeof a);
//--
console.log(typeof(a));
//--

let str3="this is america";
let br6=7;
let bigInt=1234554324433n;
let bool3= false;
let sym3=Symbol('LLLLLLLL');
let undef= undefined;
let nu11=null;

console.log("str3",typeof(str3));
console.log("br6",typeof(br6));
console.log("bigInt",typeof(bigInt));
console.log("bool3",typeof(bool3));
console.log("sym3",typeof(sym3));
console.log("undef",typeof(undef));
console.log("nu11",typeof(nu11)); // ❌ greška u js

//converting

let nb=2;
let nb1="3";
console.log(nb*nb1);
console.log(nb+Number(nb1));
//--con br --> string
let brtostring=6;
brtostring= String(brtostring);
console.log(brtostring, typeof(brtostring));
//--con string --> br
let strtobr="12";
strtobr= Number(strtobr);
console.log(strtobr, typeof(strtobr));

//--con str--> bool

let strtobool="str";
strtobool= Boolean(strtobool);
console.log(strtobool, typeof(strtobool));

//--con null-->num

let nulltonum= null;
nulltonum= Number(nulltonum);
console.log(nulltonum, typeof(nulltonum));

//--con emtstr-->num
let estrtonum= "";
estrtonum= Number(estrtonum);
console.log(estrtonum, typeof(estrtonum));

let strtonum= "lllllllla";
strtonum= Number(strtonum);
console.log(strtonum, typeof(strtonum));

let bool6="false";
bool6= Boolean(bool6);
console.log(bool6,typeof(bool6));

let bool5="";
bool5= Boolean(bool5);
console.log(bool5,typeof(bool5));


