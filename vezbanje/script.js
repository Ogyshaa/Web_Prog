function lizGuz() {
    
    const ime = document.getElementById('Imenzi').value;
    const apellido = document.getElementById('Apellido').value;
    const duzina = document.getElementById('Duzina').value;
    const tonazu = document.getElementById('Tonazu').value;

   
    document.getElementById('errorIme').innerHTML = '';
    document.getElementById('errorApellido').innerHTML = '';
    document.getElementById('errorDuzina').innerHTML = '';
    document.getElementById('errorTonazu').innerHTML = '';
    document.getElementById('rezult').innerHTML = '';

    
    const imeValid = validateInput(ime, 'Ime');
    const apellidoValid = validateInput(apellido, 'Apellido');
    const duzinaValid = validateLength(duzina);
    const tonazuValid = validateTonazu(tonazu);

    
    if (!imeValid.isValid) {
        document.getElementById('errorIme').innerHTML = imeValid.message;
    }
    if (!apellidoValid.isValid) {
        document.getElementById('errorApellido').innerHTML = apellidoValid.message;
    }
    if (!duzinaValid.isValid) {
        document.getElementById('errorDuzina').innerHTML = duzinaValid.message;
    }
    if (!tonazuValid.isValid) {
        document.getElementById('errorTonazu').innerHTML = tonazuValid.message;
    }

    
    if (imeValid.isValid && apellidoValid.isValid && duzinaValid.isValid && tonazuValid.isValid) {
        document.getElementById('rezult').innerHTML = 'Svi podaci su validni!';
    } else {
        document.getElementById('rezult').innerHTML = 'Greška u validaciji. Popravite gore navedene greške.';
    }
}


function validateInput(value, fieldName) {
    const allowedChar = /^[A-Z][a-z]*$/;
    const isValidChar = allowedChar.test(value);
    return {
        isValid: isValidChar,
        message: isValidChar 
            ? `${fieldName} je uspešno uneto.` 
            : `${fieldName} mora da počne velikim početnim slovom i sadržava samo slova.`
    };
}

function validateLength(value) {
    const isValidLength = !isNaN(value) && value > 0;
    return {
        isValid: isValidLength,
        message: isValidLength ? 'Dužina je uspešno uneta.' : 'Dužina mora biti broj veći od nule.'
    };
}


function validateTonazu(value) {
    const isValidTonazu = !isNaN(value) && value > 0;
    return {
        isValid: isValidTonazu,
        message: isValidTonazu ? 'Tonaza je uspešno uneta.' : 'Tonaza mora biti broj veći od nule.'
    };
}
