class Coek{
    constructor(ime,prezime,visina,tezina){
        this.ime = ime;
        this.prezime = prezime;
        this.visina = visina;
        this.tezina = tezina;
    }
}
let meljm = new Array()
let imerprezimer = []
let ohur_nour_youre_shor_skill_issue_ig=[] //💁‍♂️
let fat = []

function inputMe(){
    ime = document.getElementById('Imenzi').value
    prezime = document.getElementById('Apellido').value
    visina = document.getElementById('Duzina').value
    tezina = document.getElementById('Tonazu').value
    aa = new Coek(ime,prezime,visina,tezina)
    meljm.push(aa);
    iia = aa.ime+' '+aa.prezime
    imerprezimer.push(iia);
    ohur_nour_youre_shor_skill_issue_ig.push(visina)
    fat.push(tezina)
    document.getElementById('Imenzi').value ='';
    document.getElementById('Apellido').value ='';
    document.getElementById('Duzina').value ='';
    document.getElementById('Tonazu').value ='';
}

function grafik() {
    document.getElementById('c1').hidden = false;
    new Chart("c1",{
        type: "bar",
        data:{
            labels:imerprezimer,
            datasets:[
            {
                backgroundColor: 'orange',data: ohur_nour_youre_shor_skill_issue_ig
            }, 
            {
                backgroundColor:'yellow', data:fat
            }]
        },
        options:{
            legend:{display:false},
            title:{display:true,text:'Duzine i Tonaze pacenika'},
            scales:{
                yAxes:[{ticks:{min:0}}]
            }
        }
    });
}

