import express from 'express';
import multer from 'multer';
import uploadController from '../controllers/uploadController';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), uploadController.uploadImage);

export default router;
