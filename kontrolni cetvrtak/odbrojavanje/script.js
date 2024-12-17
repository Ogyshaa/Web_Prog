/*Preko BOM i DOM-a */
let novagod = '1 Jan 2025';
function odbrojvanje(){
    const date = Date.parse(novagod) - new Date();
    let d = Math.floor(date/(1000*60*60*24));
    let h = Math.floor(date/(1000*60*60)%24);
    let m = Math.floor(date/(1000*60)%60);
    let s = Math.floor(date/(1000)%60);

    document.getElementById('zez').innerHTML = `${d} dana : ${h} sati : ${m} minuta : ${s} sekundi`;
    setTimeout(odbrojvanje,1000);
}

odbrojvanje();

/*U konzoli*/
function odbrojvanje1(){
    const date = Date.parse(novagod) - new Date();
    let d = Math.floor(date/(1000*60*60*24));
    let h = Math.floor(date/(1000*60*60)%24);
    let m = Math.floor(date/(1000*60)%60);
    let s = Math.floor(date/(1000)%60);
    return{d,h,m,s}
}

function uptd(){
    const temp = odbrojvanje1();
    let ispis=" ";
    for(const x in temp)
    {
        ispis +=(`${temp[x]} ${x} : `);
    }
    console.log(ispis);
    setTimeout(uptd, 1000); // svake s pozva fnk updt
}
uptd();