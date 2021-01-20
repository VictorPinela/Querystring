exports.search = (indice, info, objeto) => {
    if (info.length == 0) return { isValid: false, msg: ERRORS[2] };
    else {
        if (indice == undefined) return { isValid: false, msg: ERRORS[0] };
        else {
            let cadastro;
            if (objeto) {
                cadastro = info.find(pessoa => pessoa.id === indice);
                if (cadastro === undefined) return { isValid: false, msg: ERRORS[1] };
                else return { isValid: true, msg: cadastro };
            }
            else {
                cadastro = info.findIndex(pessoa => pessoa.id === indice);
                if (cadastro === -1) return { isValid: false, msg: ERRORS[1] };
                else return { isValid: true, msg: cadastro };
            }

        }
    }
};

exports.searchNewest = (info) => {
    if (info.length == 0) return { isValid: false, msg: ERRORS[2] };
    else {
        let menor = info[0];
        for (let i = 1; i <= info.length - 1; i++) {
            if (info[i].age < menor.age) menor = info[i];
        }
        return { isValid: true, msg: menor };
    }
};

const ERRORS = [
    "Busca sem parametros",
    "ID invalido",
    "Banco de dados vazio"
];