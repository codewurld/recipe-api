const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 8014
const connectDB = require('./config/db');
const recipeRoute = require('./routes/recipe')


dotenv.config({ path: './config/.env' })
connectDB();
app.use(express.json());
app.use(cors())


app.use('/recipe', recipeRoute);



app.listen(PORT, console.log(
    `Server running on port ${PORT}`
))