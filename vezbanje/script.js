function lizGuz() {
    const ime = document.getElementById('Imenzi').value;
    const apellido = document.getElementById('Apellido').value;
    const duzina = document.getElementById('Duzina').value;
    const tonazu = document.getElementById('Tonazu').value;

    const imeValid = validateInput(ime, 'Ime');
    const apellidoValid = validateInput(apellido, 'Apellido');
    const duzinaValid = validateLength(duzina);
    const tonazuValid = validateTonazu(tonazu);

    let resultMessage = '';
    if (imeValid.isValid && apellidoValid.isValid && duzinaValid.isValid && tonazuValid.isValid) {
        resultMessage = 'Svi podaci su validni!';
    } else {
        resultMessage = 'Greška u validaciji:<br>';
        if (!imeValid.isValid) resultMessage += imeValid.message + '<br>';
        if (!apellidoValid.isValid) resultMessage += apellidoValid.message + '<br>';
        if (!duzinaValid.isValid) resultMessage += duzinaValid.message + '<br>';
        if (!tonazuValid.isValid) resultMessage += tonazuValid.message + '<br>';
    }
    document.getElementById('rezult').innerHTML = resultMessage;
}

function validateInput(value, fieldName) {
    const allowedChar = /^[A-Z][a-z]*$/;
    const isValidChar = allowedChar.test(value);
    return {
        isValid: isValidChar,
        message: isValidChar ? `${fieldName} je uspešno unet.` : `${fieldName} mora da sadrži samo slova I DA POCENE VELIKIM SLOVOM.`
    };
}

function validateLength(value) {
    const isValidLength = !isNaN(value) && value > 0 && !value<90 && !value> 210 ;
    return {
        isValid: isValidLength,
        message: isValidLength ? 'Dužina je uspešno uneta.' : 'Duzina: UH uh lil bro❌, unesiga pa lizni ponov'
    };
}

function validateTonazu(value) {
    const isValidTonazu = !isNaN(value) && value > 0 && !value<20 && !value> 300;
    return {
        isValid: isValidTonazu,
        message: isValidTonazu ? 'Tonaza je uspešno uneta.' : 'Tonaza: UH uh lil bro❌, unesiga pa lizni ponovo'
    };
}
