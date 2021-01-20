exports.valida = (input) => {
    const a = _validaNome(input.name);
    const b = _validaIdade(input.age);
    if (a.isValid) return b;
    else return a;

};

function _validaNome(nome) {
    const regex = /[0-9@!#$%^&*(),_\-=+/\\]/
    if (nome != "") {
        if (!regex.test(nome)) return { isValid: true, msg: null };
        else return { isValid: false, msg: ERRORS[0] };
    }
    else return { isValid: false, msg: ERRORS[1] };
};

function _validaIdade(idade) {
    if (idade != "") {
        if (!isNaN(+(idade))) {
            if (idade >= 18) return { isValid: true, msg: null };
            else return { isValid: false, msg: ERRORS[2] };
        }
        else return { isValid: false, msg: ERRORS[3] };
    }
    else return { isValid: false, msg: ERRORS[4] };
};

const ERRORS = [
    "Campo nome não deve conter numeros ou caracteres especiais",
    "Campo nome vazio",
    "Idade deve ser maior de 18 anos",
    "Idade deve conter somente numeros",
    "Campo idade vazio"
];