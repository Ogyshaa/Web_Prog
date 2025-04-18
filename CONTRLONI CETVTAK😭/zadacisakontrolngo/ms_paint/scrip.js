const canvas = document.getElementById('c1')
const ctx = canvas.getContext('2d')

let btnSave = document.querySelector('.save')
let btnClear = document.querySelector('.clear')
let penColor = document.querySelector('#pinCilir')
let penWidth = document.querySelector('#pinThicc')
let output =document.querySelector('.output')

const mUSCLIK={
    draw: false,
    x:0,
    y:0,
    lX: 0,
    lY:0
};

canvas.style.border = '10px solid purple';

btnSave.addEventListener('click', saveImg);
btnClear.addEventListener('click', clearImg);

canvas.addEventListener('mousemove',(e)=>{
    mUSCLIK.lastX = mUSCLIK.x;
    mUSCLIK.lastY = mUSCLIK.y;
    mUSCLIK.x = e.clientX;
    mUSCLIK.y = e.clientY;
    draw();
});

canvas.addEventListener('mousedown', (e)=>{
    mUSCLIK.draw = true;
});

canvas.addEventListener('mouseup', (e) =>{
    mUSCLIK.draw =false;
});

canvas.addEventListener('mouseout', (e) =>{
    mUSCLIK.draw =false;
});

function draw(){
    if(mUSCLIK.draw){
        ctx.beginPath();
        ctx.moveTo(mUSCLIK.lastX, mUSCLIK.lastY);
        ctx.lineTo(mUSCLIK.x,mUSCLIK.y);
        ctx.strokeStyle = penColor.value;
        ctx.lineWidth = penWidth.value;
        ctx.stroke();
        ctx.closePath();
    }
}

function clearImg(){
    let temp = confirm('u sure???');
    if(temp){
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
}

function saveImg(){
    const dataURL = canvas.toDataURL();
    console.log(dataURL);
    const img = document.createElement('img');
    output.prepend(img);
    img.setAttribute('src', dataURL);
    const link = document.createElement('a');
    output.append(link);
    let fileName = Math.random().toString(16).substring(-8) +'.png';
    link.setAttribute('download', fileName);
    link.href = dataURL;
    link.click();
    output.removeChild(link);
}
