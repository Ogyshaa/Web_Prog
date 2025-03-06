const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');

//galvenzi
ctx.beginPath();
ctx.arc(200, 150, 50, 0, Math.PI *2 ); 
ctx.fillStyle = '#f4c542'; 
ctx.fill();
ctx.stroke();

//okenzi
ctx.beginPath();
ctx.arc(180, 150, 10 , 0 ,Math.PI *2 )
ctx.arc(220,150,10, 0, Math.PI *2)
ctx.fillStyle = '#FF69B4'
ctx.fill()

//ustenzi
ctx.beginPath()
ctx.arc(200,175,10,0,Math.PI)
ctx.moveTo(190,175)
ctx.lineTo(210,175)
ctx.moveTo(200,160)
ctx.lineTo(200,170)
ctx.fillStyle='#000000'
ctx.strokeStlye='#0000'
ctx.fill()
ctx.stroke()

//telenzi nogenzi i rukenzi

//telenzi
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 300); 
//rukenzi
ctx.moveTo(150,220)
ctx.lineTo(250,220)
//nogenzi
ctx.moveTo(200,300)
ctx.lineTo(250,350)
ctx.moveTo(200,300)
ctx.lineTo(150,350)

ctx.strokeStyle = '#f4c542'; 
ctx.stroke();

//kapenzi
ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 100);
ctx.lineTo(200, 80);
ctx.closePath(); 
ctx.fillStyle = '#50C878'; 
ctx.fill(); 
ctx.stroke();
