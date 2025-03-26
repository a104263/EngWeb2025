var Contrato = require('../models/contrato')

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.findById = (id) => {
    return Contrato
        .findOne({_id : id})
        .exec()
}

module.exports.listByEntidade = (ent) => {
    return Contrato
        .find({NIPC_entidade_comunicante : ent})
        .exec()
}

module.exports.listByTipo = (t) => {
    return Contrato
    .find({tipoprocedimento : t})
    .exec()
}

module.exports.listEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .exec()
}

module.exports.listTipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .exec()
}

module.exports.insert = async (contrato) => {
    const c = await Contrato.find({ _id: contrato.id }).exec();
    if (c.length === 0) {
        const newContrato = new Contrato(contrato);
        newContrato._id = contrato.id;
        return await newContrato.save();
    }
    return null;
}

module.exports.update = (id, contrato) => {
    return Contrato.findByIdAndUpdate(id, contrato)
    .exec()
}

module.exports.delete = (id) => {
    return Contrato.findByIdAndDelete(id)
    .exec()
}