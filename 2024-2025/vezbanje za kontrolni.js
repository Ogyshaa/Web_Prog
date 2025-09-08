//trougao pravougli
for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}

//onrnuti trougoa
/* 
let numRows = 5; // broj redova

for (let i = numRows; i > 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += '*';
    }
    console.log(row);
}

*/

let l = Number(prompt('unesi br zvezda'));
for (let i = 0; i<l;i++)
{
    let str1='';
    for(let j=0;j<l-i;j++)
    {
        str1+='*';
    }
    console.log(str1);
}

//suma br dok se neupse 1
let sum = 0;
let n = Number(prompt("Unesite broj "));

while (n !== 1) {
    sum += n;
    n = Number(prompt("Unesite broj "));
}

console.log(sum);

//da li je prost

let p=Number(prompt('unesi te JEDAN br ヾ(≧▽≦*)o '));

for (let i =2;i<=p;i++)
{
    if((p%i)==0)
    {
        console.log('(::::');
    }
}

//
/*da li je isti veci rayliciit -20 - 60*/
let t=Number(prompt('1'));
let r= Number(prompt('2'));
if (t!=r)
{
    if (t>r)
    {
        console.log("prvi je veci");
    }
    else console.log('drugi je veci');

}
else console.log('isti smo u duzini 🥵');

// unesi br i da se njegoe cif prikayu kao suma

let m1= Number(prompt('useni te br'));
let s1=0;
while (m1>0)
{
    s1=s1+(m1%10);
    m1=Math.floor(m1/10);

}
console.log(s1)
/*Vidiet idali je osoba od 75kg i 169cm vis normane
kilaze ako je normalan bmi imzmedju 18.5 i 20 
bmi=m/hm2*/

let m= 75;
let h= 169/100;
let bmi= m/(h*h);
console.log(bmi);

if(bmi>=18.5 && bmi<=20)
{
    console.log('ti si vitka figura');
}
else if(bmi<18.5)
{
    console.log('Pa jebot pa ti si neuranjen')
}
else console.log('srma te bilo krmaco');


// x ispis pomocu zveda

let s=Number(prompt('unesi nes nzm'));

for(let i = 0;i<s;i++)
{
    let r='';
    for (let j=0;j<s;j++)
    {
        if(i==j || i+j == s-1)
        {
            r+='*';
        }
    else 
    {
        r+=' ';
    }
    }
    console.log(r);
}
/***********************************/



//trougao s dolar

let n = 5; // broj redova

for (let i = 1; i <= n; i++) {
  let linija = '';

  // Dodaj zvezdice
  for (let j = 1; j < i; j++) {
    linija += '*';
  }

  // Dodaj simbol $
  linija += '$';

  // Ispiši red
  console.log(linija);
}

//dvocif br 
for (let i = 10; i <= 99; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
















//za kvadrat
/*
let width = Number(prompt("Unesite širinu "));
let height = Number(prompt("Unesite visinu "));

for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        
        let line = '';
        for (let j = 0; j < width; j++) {
            line += '*';
        }
        console.log(line);
    } else {
        
        let line = '*';
        for (let j = 1; j < width - 1; j++) {
            line += ' '; 
        }
        line += '*';
        console.log(line);
    }
}
*/
/*
let radius = Number(prompt("Unesite : "));

for (let i = -radius; i <= radius; i++) {
    let line = '';
    for (let j = -radius; j <= radius; j++) {
        // Proverava se da li je tačka unutar kruga
        if (i * i + j * j <= radius * radius) {
            line += '*'; // Ispisuje zvezdicu
        } else {
            line += ' '; // Ispisuje razmak
        }
    }
    console.log(line);
}
*/
