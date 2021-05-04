import express from 'express';
import * as apiController from '../controllers/api';

const router = express.Router();

router.get('/getOptions', apiController.getOptions);
router.get('/getPack/:pack', apiController.getPack);
router.get('/getCompletedRequest/:id', apiController.getCompletedRequest);
router.get('/getGenStatus/', apiController.getJobStatus);
router.post('/generate', apiController.generate);
module.exports = router;
