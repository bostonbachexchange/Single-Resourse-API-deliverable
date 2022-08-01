const mongoose = require('mongoose')

const { Schema, model } = mongoose

const repertoireSchema = new Schema(
    {
        piece: {
            type: String,
            required: true, 
        },
        catalog: {
            type: String,
            required: false, 
        },
        composer: {
            type: String,
            required: true 
        },
        level: {
            type: Number,
            required: false 
        },
        published: {
            type: Date,
            required: false
        },
        description: {
            type: String,
            required: false 
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

module.exports = model('Repertoire', repertoireSchema)