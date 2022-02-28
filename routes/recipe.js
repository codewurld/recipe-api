const express = require('express');
const router = express.Router();
const { getRecipes, getSingleRecipe, addRecipe, deleteRecipe, updateSingleRecipe, updateRecipes } = require('../controllers/recipeController')


router
    .route('/')
    .get(getRecipes)
    .post(addRecipe)
    .put(updateRecipes)


router
    .route('/:id')
    .get(getSingleRecipe)
    .delete(deleteRecipe)
    .patch(updateSingleRecipe)


module.exports = router