const { search } = require('./search');

exports.delet = (indice, info) => {
    let pos = search(indice, info, false);
    if (pos.isValid) {
        info.splice(pos.msg, 1);
        pos.msg = "Cadastro deletado com sucesso";
    }
    return pos;
};