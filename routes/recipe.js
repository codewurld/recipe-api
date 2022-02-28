const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe')

router.post('/', async (req, res) => {
    try {

        const recipe = await req.body

        Recipe.bulkSave()


    } catch (err) {

    }
})