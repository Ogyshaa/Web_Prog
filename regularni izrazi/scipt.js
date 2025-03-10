function validateUSER(username)
{
    //def kriterijuma
    const min = 4
    const max = 20
    const allowedChar= /^[a-zA-Z0-9_]+$/

    //PROVERA da li je username obuhvatio kriterijum
    const isValidLen = username.length >= min && username.length <= max
    const isValidChar = allowedChar.test(username)

    return{
        isValid: isValidLen && isValidChar,
        isValidLen,
        isValidChar
    }
}

const username = "user123_"
const validationResult = validateUSER(username)

console.log('JUPI VALIDNISTE USER: ', validationResult.isValid)
console.log('JUPI VALIDNA VAM DUZINA', validationResult.isValidLen)
console.log('JUPI VALIDNI SU VAM KARAKTERI🥰', validationResult.isValidChar)

function validatePassword(password){
    //def kriterijm
    const min =8
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasNUM = /[\d]/.test(password)
    const specChar =/[!@#$%^&()_+\+-=\[\]{}:;'"><\\|?]/.test(password)

    //provera
    const isValidLen = password.length >=min
    const isValid = isValidLen && hasUpperCase &&hasLowerCase &&hasNUM &&specChar

    return{
        isValid,
        isValidLen,
        hasLowerCase,
        hasUpperCase,
        hasNUM,
        specChar
    }
}

const password = 'Password1234!'
const validationResult1 = validatePassword(password)

console.log('mrzime da pisem pass',validationResult1.isValid)
console.log('mrzime da pisem len',validationResult1.isValidLen)
console.log('mrzime da pisem Lower',validationResult1.hasLowerCase)
console.log('mrzime da pisem Upper',validationResult1.hasUpperCase)
console.log('mrzime da pisem spec',validationResult1.specChar)

//email

function validateEmail(email)
{
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

//pvimel
const email1 = 'primer@priemr.com'
const email2 = 'nepravilna_email.com'

console.log(email1,"validan: ", validateEmail(email1))
console.log(email2,"validan: ", validateEmail(email2))

