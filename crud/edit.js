const { search } = require('./search');
const { valida } = require('./validaInput');

exports.edit = (indice, mod, info) => {
    let pos = search(indice, info, false);
    if (pos.isValid) {
        let val = valida(mod);
        if (val.isValid) {
            Object.assign(info[pos.msg], mod)
            //info[pos.msg] = { ...info[pos.msg], ...mod };
            val.msg = "Cadastro alterado com sucesso";
        }
        return val;
    }
    else return pos;
};