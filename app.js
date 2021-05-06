import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api';
import { request } from './database/models';

request.update({ is_download_available: false }, { where: { is_download_available: true } });

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);

module.exports = app;
