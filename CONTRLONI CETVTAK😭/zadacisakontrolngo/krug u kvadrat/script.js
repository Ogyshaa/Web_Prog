const canvas = document.getElementById('c1')
const ctx = canvas.getContext('2d')
let btn1 = document.querySelector('#btn1')
let kvug = true

function drawCircle(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()
    ctx.arc(150,150,100,0,Math.PI*2)
    ctx.fillStyle = "#FF69B4"
    ctx.fill()
    ctx.stroke()
}
function drawRect(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()
    ctx.fillStyle = '#FF69B4'
    ctx.fillRect(150,150,100,100)
}

drawCircle()

btn1.addEventListener('click',()=> {
    if(kvug){
        drawRect()
    }
    else{
        drawCircle()
    }
    kvug != kvug
})


