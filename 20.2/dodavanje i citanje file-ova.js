let poluka3=document.getElementById('poluka3');
function uploadAndReadFile(files){
    let fr = new FileReader(); //pravimo filereader objekat
    fr.onload = function (e){ //ano funk koja salje podatke o dogadjaju prilikom ucitavanja
        poluka3.innerHTML = e.target.result;
    };
    fr.readAsText(files[0]); //citamo podatak pomocu motad readAs, posto je txt u pitanju bice readAsText, na objektu
}
