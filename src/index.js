import axios from 'axios';

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import dotenv from 'dotenv';
dotenv.config();

import logger from './logger';

app.get('/', function (req, res) {
    res.status(200).json({
        data: 'sample api'
    })
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    const message = 'sample api is listened on port ' + port;
    console.log(message);
    logger.info(message);
});