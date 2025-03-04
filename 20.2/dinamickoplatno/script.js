// kreiranje platna na stranici

let canvas = document.getElementById('c1'); //pristupamo canvas-u
let ctx = canvas.getContext('2d'); //da bi smo mogli da crtamo na canvasu dodeljujemo mu context

canvas.height = 500;
canvas.width = 500;
//metoda fill popunjava povrsinu canvasa nekom bojom
ctx.fillStyle='#FF69B4';
ctx.fillRect(20,15,100,100)  //prva dva parametra su x i y odakle krece figura, a druga dva parametra su sifrina i visna figure

// dodavnaje linije
//da bi smo je dodali prvo treba da  odredimo sirinu

ctx.lineWidth = 10;
ctx.moveTo(0,115) //pocetna tacka
ctx.lineTo(250,500) //krajnja tacka
// a dabi se nacrtala posto jovana kaze da nemoze pise se metod stroke
ctx.stroke()

//srtanje kruga

ctx.beginPath(); //ovo pisemo da se ne povezuju figure
ctx.arc(250,250,50,0,2*Math.PI)    // ovo je za klug :)
            // centar(x,y) poluprecnik, pocetni ugao i kranji ugao u radijanima
// a da bi se nacrtao trreba da ga strokeujes
ctx.stroke();

//dodavanje txt-a

ctx.font = '16px Arial';
let txt = 'Danas je lep dan kaze Luka';
ctx.fillText(txt,150,25);

// zadatak
const str = 'druga grupa 3-1'
ctx.font = 'italic 50px Comic'
ctx.fillStyle='Blue'
ctx.fillText(str,100,100);
ctx.font = 'bold 20px Arial';
ctx.fillStyle = 'red';

for( let i =1;i<=10;i++){
    ctx.fillText('Ucenik: '+i,50,(200+ 30*i));
}

//animacija dodavanje

window.onload = init;

var pos = {
    x:0,
    y:50,
};

function init(){
    draw();
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pos.x = pos.x+5;
    if(pos.x>canvas.width){
        pos.x = 0;
    }
    if(pos.y>canvas.height){
        pos. y = 0;
    }

    ctx.fillRect(pos.x,pos.y,100,100);
    window.setTimeout(draw,50);
}