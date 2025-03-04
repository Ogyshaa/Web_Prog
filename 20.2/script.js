//Citac
let message = document.getElementById('message');

if(window.FileReader){
    message.innerText =  'Superiska';
}
else{
    message.innerText='nisi zabavan :(';
}
//otpremnaje jedene datotke
let poruka = document.getElementById('poluka');
function uploadenzi(files){
    console.log(files[0]);
    poruka.innerText = files[0].name;
}

//vise datoteka
let poruka2 = document.getElementById('poluka2');
function uploadenzi2(files){
    for(let i = 0 ;i <files.length;i++){
        poruka2.innerHTML +=files[i].name + '<br>'
    }
}
