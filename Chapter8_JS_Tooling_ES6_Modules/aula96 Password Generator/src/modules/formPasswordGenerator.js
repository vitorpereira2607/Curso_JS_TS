import generatePassword from './generator'

const result = document.querySelector('.result');
const chkCharacters = document.querySelector('.chk-characters');
const chkUpperCase = document.querySelector('.chk-upper-case');
const chkLowerCase = document.querySelector('.chk-lower-case');
const chkNumbers = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const btnGeneratePassword = document.querySelector('.generate-password')

export default () => {
    btnGeneratePassword.addEventListener('click', () => {
        result.innerHTML = generate();
    })
}

function generate(){
    const password = generatePassword(
        chkCharacters.value,
        chkUpperCase.checked,
        chkLowerCase.checked,
        chkNumbers.checked,
        chkSymbols.checked,
    );

    return password || 'Nothing was selected';
}