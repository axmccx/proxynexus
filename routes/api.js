import express from 'express';
import * as apiController from '../controllers/api';

const router = express.Router();

router.get('/getOptions', apiController.getOptions);
router.get('/getPack/:pack', apiController.getPack);
router.get('/getGenStatus/', apiController.getJobStatus);
router.get('/getFile/:id', apiController.getFile);
router.post('/generate', apiController.generate);
module.exports = router;
