let osoba = {
    ime : 'Pera',
    godine: 50
}
/*

JSON ima parove kljuc/vrednost 
Ima nekoliko options 😋:

1. par kljuc/vrednost (string,number,bool i null)
2. par kljuc/vrednost sa listama koje imaju zagrade[]
3. par kljuc/vrednost sa drugima objektima koji imaju zagrade{}

*/

let str = "{\"ime\": \"Ptica trkacica\",\"godine\": 30}";
let obj = JSON.parse(str)
console.log(obj.ime, 'imanzi', obj.godine,'godinzi')

let pas = {
    ime: 'Pjetar',
    rasa: 'francuz'
}

let strpas = JSON.stringify(pas)
console.log(typeof strpas)
console.log(strpas)