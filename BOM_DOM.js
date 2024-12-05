/*BOM je objektni model pregledaca i sadrzi sve metode 
za interakciju JS sa pregledacem*/

/*DOM je objektni model dokumenta koji sadrzi HTML elemente na web stranici
na taj nacin kreiramo interaktivne web stranice (dugme, labela, text box) */

/*
BOM
RAZMOTRICEMO NEKE OD SLEDECIH OBJEKATA:
HISTORY
NAVIGATOR
LOCATION
SCREEN
SVI OVI OBJEKTI SU "DECA" KLASE WINDOW
*/

/*OBJEKAT DOM KOJI CE MO RAZMOTRITI JE NPR DOCUMENT*/

console.dir(window);
/*console.dir() ispisace sva svojstva navedena u zagradama */
console.log(window.document.title);
console.log(window.document.URL);

console.dir(window.document.URL);

console.dir(history);
console.log(history.length);

console.dir(history);

//objekat navigator sadrzi info koje pregledac koristi i koju verziju koristi
//sadrzi info o OS

console.dir(window.navigator);
//location sadrzi info o URL trenutne stranice
console.dir(window.location)

console.log(window.innerWidth);//unutrasnja sirina prozora
console.log(window.innerHeight);//unutrasnja visina prozora
//SCREEN sadrzi sve info o ekranu
console.dir(window.screen);
console.log(screen.height);
console.log(screen.width);

console.log(screen.availWidth);//sirina dostupnog ekrana
console.log(screen.availHeight);//visina dostupnog ekrana

console.log(screen.colorDepth);//rezolucija boje (24 bit ili 32bit)
console.log(screen.pixelDepth);//dubina pixel-a (parti rezoluciju boje)

//Sada nepisemo u konzoli nego u html

document.getElementById("sirina").innerHTML = 'Sirina ekrana je ' + screen.width;

document.getElementById("visina").innerHTML = 'Visina ekrana je ' + screen.height;

document.getElementById("sirDost").innerHTML = 'Sirina dostupnog ekrana je ' + screen.availWidth;

document.getElementById("visDost").innerHTML = 'Visina dostupnog ekrana je ' + screen.availHeight;

document.getElementById("boja").innerHTML = 'Rezolucija boje ekrana je ' + screen.colorDepth;

document.getElementById("pix").innerHTML = 'Dubina piksela ekrana je ' + screen.pixelDepth;






