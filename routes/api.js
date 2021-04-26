import express from 'express';
import * as apiController from '../controllers/api';

const router = express.Router();

router.get('/getOptions', apiController.getOptions);
router.get('/getCompletedRequest/:id', apiController.getCompletedRequest);
router.post('/generate');
module.exports = router;
