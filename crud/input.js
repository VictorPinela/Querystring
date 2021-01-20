const { valida } = require('./validaInput')
const { v1: uuidv1 } = require('uuid');

exports.input = (input, info) => {
    let val = valida(input);
    if (val.isValid) {
        var id = uuidv1();
        info.push(
            {
                "id": id,
                "name": input.name,
                "age": input.age
            }
        )
        val.msg = id
    };
    return val;
};