const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe')


exports.getRecipes = async (req, res) => {

    try {

        const recipes = await Recipe.find();

        return res.status(200).json({
            success: true,
            count: recipes.length,
            data: recipes
        })

    } catch (err) {
        return res.json({
            success: false,
            message: err
        })
    }
}

exports.getSingleRecipe = async (req, res) => {

    try {

        const recipe = await Recipe.findById(req.params.id);

        !recipe ? res.status(404).json({
            success: false,
            message: "Item not found"
        }) : res.status(200).json({
            success: true,
            data: recipe
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }
}

exports.addRecipe = async (req, res) => {

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
}

exports.deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.remove({ _id: req.params.id });

        return res.status(200).json({
            success: true,
            data: deletedRecipe,
            message: "Item successfully deleted"
        })

    } catch (err) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        })
    }

}

exports.updateSingleRecipe = async (req, res) => {

    try {
        const updatedRecipe = await Recipe.updateOne({ _id: req.params.id }, { $set: { cookingTime: req.body.cookingTime } });

        !updatedRecipe ? res.status(404).json({
            success: false,
            message: "Item cannot be found",

        }) : res.status(200).json({
            success: true,
            message: "Item successfully updated",
            data: updatedRecipe
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err
        })
    }

}

exports.updateRecipes = async (req, res) => {


    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                dish: req.body.dish,
                country: req.body.country,
                ingredients: req.body.ingredients,
                instructions: req.body.instructions,
                cookingTime: req.body.cookingTime,
            }
        });

        return res.status(200).json({
            success: true,
            data: updatedRecipe
        })

    } catch (err) {
        return res.status(500).json({
            success: failure,
            message: err
        })
    }
}

