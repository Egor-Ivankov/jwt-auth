require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cockieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cockieParser());
app.use(cors());

const start = async () => {
    try {

        await mongoose.connect(process.env.DB_URL);

        app.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();