exports.searchNewestHandler = (menor, res) => {
    if (menor.isValid) return res.status(302).send({ "cadastro": menor.msg });
    else return res.status(404).send({ message: menor.msg });
}

exports.searchHandler = (busca, res) => {
    if (busca.isValid) return res.status(302).send({ "cadastro": busca.msg });
    else return res.status(404).send({ message: busca.msg });
}

exports.inputHandler = (input, res) => {
    if (input.isValid) return res.status(201).send({ "id": input.msg });
    else return res.status(400).send({ message: input.msg });
}

exports.editHandler = (edit, res) => {
    if (edit.isValid) return res.status(201).send({ "id": edit.msg });
    else return res.status(400).send({ message: edit.msg });
}

exports.deleteHandler = (delet, res) => {
    if (delet.isValid) return res.status(201).send({ message: delet.msg });
    else return res.status(400).send({ message: delet.msg });
}