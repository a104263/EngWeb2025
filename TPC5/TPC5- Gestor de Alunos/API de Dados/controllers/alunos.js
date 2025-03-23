var Aluno = require('../models/aluno')

module.exports.list = () => {
    return Aluno
        .find()
        .sort({nome : 1})
        .exec()
}

module.exports.findById = (id) => {
    return Aluno
        .findOne({_id : id})
        .exec()
}

module.exports.insert = async (aluno) => {
    const a = await Aluno.find({ _id: aluno.id }).exec();
    if (a.length === 0) {
        const newAluno = new Aluno(aluno);
        newAluno._id = aluno.id;
        return await newAluno.save();
    }
    return null;
}

module.exports.update = (id, aluno) => {
    return Aluno.findByIdAndUpdate(id, aluno)
    .exec()
}

module.exports.delete = (id) => {
    return Aluno.findByIdAndDelete(id)
    .exec()
}