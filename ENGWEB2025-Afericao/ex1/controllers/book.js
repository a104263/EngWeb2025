var Book = require('../models/book')

module.exports.list = () => {
    return Book
        .find()
        .exec()
}

module.exports.findById = (id) => {
    return Book
        .findOne({_id : id})
        .exec()
}

module.exports.listByCharacter = (char) => {
    return Book
        .find({characters :  {$in: [char]}})
        .exec()
}
module.exports.listByGenre = (g) => {
    return Book
        .find({genres : {$in: [g]}})
        .exec()
}

module.exports.listCharacters = () => {
    return Book
        .distinct("characters")
        .exec()
}

module.exports.listGenres = () => {
    return Book
        .distinct("genres")
        .exec()
}

module.exports.insert = async (book) => {
    const b = await Book.find({ _id: book.id }).exec();
    if (b.length === 0) {
        const newBook = new Book(book);
        newBook._id = book.id;
        return await newBook.save();
    }
    return null;
}

module.exports.update = (id, b) => {
    return Book.findByIdAndUpdate(id, b)
    .exec()
}

module.exports.delete = (id) => {
    return Book.findByIdAndDelete(id)
    .exec()
}