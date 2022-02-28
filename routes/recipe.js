const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe')

router.post('/', async (req, res) => {

    const { dish, country, ingredients, instructions, cookingTime, createdAt } = req.body;

    const recipe = new Recipe({
        dish: dish,
        country: country,
        ingredients: ingredients,
        instructions: instructions,
        cookingTime: cookingTime,
        createdAt: createdAt
    })

    try {
        await recipe.save();
        return res.status(200).json({
            success: true,
            data: recipe
        })
    } catch (err) {
        return res.status(404).json({
            success: false,
            message: err
        })
    }
})

module.exports = router