const mongoose = require('mongoose')
const Repertoire = require('./repertoire')
const db = require('../../config/db')

const startRepertoirez = [
    { piece: 'String', catalog: 'String', composer: 'String', level: 'String', description: 'String'},
    { piece: 'String', catalog: 'String', composer: 'String', level: 'String', description: 'String'},
]

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then()
    // only delete repetoirez without an owner
        Repertoire.deleteMany({ owner: null })
            .then(deletedRepertoirez => {
                console.log('deletedRepertoirez', deletedRepertoirez)
                Repertoire.create(startRepertoirez)
                    .then(newRepertoirez => {
                        console.log('the new repertoirez', newRepertoirez)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })