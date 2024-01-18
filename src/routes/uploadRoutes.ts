import express from 'express';
import multer from 'multer';
import { uploadImage } from '../controllers/uploadController';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads/');
  },
  filename: (_, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.single('image'), uploadImage);

export default router;
