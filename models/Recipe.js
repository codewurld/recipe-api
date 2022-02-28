const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    dish: {
        type: String,
        trim: true,
        required: true
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    ingredients: {
        type: String,
        trim: true,
        required: true
    },
    instructions: {
        type: String,
        trim: true,
        required: true
    },
    cookingTime: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('kitchen-labs', RecipeSchema);