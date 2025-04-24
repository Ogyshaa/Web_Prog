class Mucen{
    constructor(ime, pol, raz, pro){
        this.ime = ime;
        this.pol = pol;
        this.raz =raz;
        this.pro = pro;
    }
}

let muc = new Array()
let ime_prez = []
let pol = []
let raz = []
let pro = []

function inputirajME() {
    let ime = document.getElementById('ime').value;
    let polj = document.getElementById('pol').value;
    let razzz = document.getElementById('raz').value;
    let prso = document.getElementById('pr').value;
    if (!validacija(ime, polj, razzz, prso)) return;
    let mica = new Mucen(ime, polj, razzz, prso);
    muc.push(mica);
    ime_prez.push(ime);
    pol.push(polj);
    raz.push(razzz);
    pro.push(parseFloat(prso));
    document.getElementById('ime').value = '';
    document.getElementById('pol').value = '';
    document.getElementById('raz').value = '';
    document.getElementById('pr').value = '';
}


function grafik() {
    document.getElementById('c1').hidden = false;
    new Chart("c1",{
        type: "bar",
        data:{
            labels:ime_prez,
            datasets:[
            {
                backgroundColor: 'orange',data: pol
            }, 
            {
                backgroundColor: 'red', data:pro
            }]
        },
        options:{
            legend:{display:false},
            title:{display:true,text:'Pacenici'},
            scales:{
                yAxes:[{ticks:{min:0}}]
            }
        }
    });
}

function validacija(ime, pol, raz, pro) {
    let valid = true;

    document.getElementById("errorI").innerText = "*";
    document.getElementById("errorP").innerText = "*";
    document.getElementById("errorO").innerText = "*";
    document.getElementById("errorPR").innerText = "*";

    if (ime.trim() === "") {
        document.getElementById("errorI").innerText = "Greska!!! Unesi ispravno ime!";
        valid = false;
    }

    if (!(pol.toLowerCase() === "zenski" || pol.toLowerCase() === "muski")) {
        document.getElementById("errorP").innerText = "Greska!!! Unesi 'zenski' ili 'mus'!";
        valid = false;
    }

    if (raz.trim() === "") {
        document.getElementById("errorO").innerText = "Greska!!! Unesi razred i odeljenje!";
        valid = false;
    }

    let prosek = parseFloat(pro);
    if (isNaN(prosek) || prosek < 1 || prosek > 5) {
        document.getElementById("errorPR").innerText = "Greska!!! Ocena mora biti broj od 1.00 do 5.00!";
        valid = false;
    }

    return valid;
}
