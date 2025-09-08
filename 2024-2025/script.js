//odabir elemenata kao objekta
//kako mozemo da dodjemo do taga odnosno elementa koji je paragraf krecuci se kroz DOM - objektni domen dokumenta

console.log(document.body.children.pozdrav);

document.body.children.pozdrav.innerText="Dovidjenja";

document.body.children.pozdrav.innerHTML="<b>Dovidjenja</b>";

//pristup elementima

//pomocu ID-a
//prema naziva klase
//prema nazivu taga
//pomocu CSS selektora

console.log(document.getElementById("drugi"));
console.log(document.getElementsByTagName("div").item(1)); //html kolekcija
console.log(document.getElementsByTagName("div").namedItem("prvi"));
console.log(document.getElementsByClassName("nesto"));

//pristup pomocu metoda queryselector i queryselectorAll
console.log(document.querySelector('p')); //svi elementi taga p
console.log(document.querySelector(".primer"));
console.log(document.querySelector("#prvi"));

console.log(document.querySelectorAll('p'));
console.log(document.querySelectorAll(".primer"));
console.log(document.querySelectorAll("#drugi"));

//element hendler klikova - onclick()

function stop(){
    alert("Ups!");
}

document.getElementById("druginacin").onclick = function(){
    alert("Oh ne, upsic");
}
