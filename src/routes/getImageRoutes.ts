import express from 'express';
import getImageController from '../controllers/getImageController';

const router = express.Router();

router.get('/', getImageController.getImage);

export default router;
