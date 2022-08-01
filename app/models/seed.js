const mongoose = require('mongoose')
const Repertoire = require('./repertoire')
const db = require('../../config/db')

const startRepertoirez = [
    { piece: 'Sonata in F Minor', catalog: 'Op. 2, No. 1', composer: 'Beethoven', level: 10, description: 'A sonata in four movement. First movement features an upword "Mannheim" rocket theme. The final movement contains quick broken-chords, triplets and resonant chords.'},
    { piece: 'Sonata in C minor', catalog: 'Op. 10, No. 1', composer: 'Beethoven', level: 10, description: 'The first movement features a strong broken-chord figure with dotted rhythms that must be played precisely, and not as triplets. The slow movement is quite lyrical. The humorus finale is the most accessible movement.'},
    { piece: 'Sonata in F Major', catalog: 'Op. 10, No. 2', composer: 'Beethoven', level: 10, description: 'The first movement requires sophisticated humor played with resonant, full chords. The allegretto in Minuet and trio form of the second movement replaces the slow movement of a typical sonata. Its chordal writing carries an appealing character. The final Presto is contrapuntal and conversational, appropiate for the perfomer with strong rhythm and fine finger agility.'},
    { piece: 'Sonata in C minor, "Pathetique"', catalog: 'Op. 13', composer: 'Beethoven', level: 10, description: 'TThe name "Pathetique" was one of only two titles given by Beethoven to his sonatas. This first movement is one of the most popular sonata movements in his output. The opening Grave section requires interpretative insight and fine skill in executing the complex rhythms with exactness. The movement itself, with the recurring traces of the opening grave and the numerous surprises, is more difficult than many performers realize. The familiar second movement is a beautiful hymn-like work in rondo form. Careful attention to voicing the thick textures is required. The final movement is driving and energetic, with long phrases that can easily become sing-song usless carefully inflected. The performer needs strong fingers and a fine sense of articulation in the comples phrases of this dramatic movement.'},
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