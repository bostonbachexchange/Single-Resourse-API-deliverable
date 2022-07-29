const mongoose = require('mongoose')

const { Schema, model } = mongoose

const repertoireSchema = new Schema(
    {
        piece: {
            type: String,
            required: true, 
        },
        composer: {
            type: String,
            required: true 
        },
        level: {
            type: String,
            required: true 
        },
        description: {
            type: String,
            required: true 
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }, {
        timestamps: true,
        toObject: { virtuals: true },
        toJson: { virtuals: true }
    }

)

// Virtual schema values????

module.exports = model('Repertoire, repertoireSchema')