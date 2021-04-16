import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);

module.exports = app;
