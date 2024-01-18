import fs from 'fs';
import { Request, Response } from 'express';
import Image from '../models/ImageModel';
import { isValidImage } from '../utils/validationUtils';

export const uploadImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'No image file provided.' });
      return;
    }

    if (!isValidImage(req.file.mimetype)) {
      res.status(400).json({ message: 'Invalid image file format.' });
      return;
    }

    const filename = Date.now() + req.file.originalname;
    fs.renameSync(req.file.path, `uploads/${filename}`);
    const newImage = new Image({
      filename: filename,
      contentType: req.file.mimetype
    });
    await newImage.save();
    const imageUrl = `/get_image/${newImage._id}`;
    res
      .status(200)
      .json({ message: 'Image uploaded successfully.', imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error.');
  }
};
