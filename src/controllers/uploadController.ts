import { Request, Response } from 'express';
import Image from '../models/ImageModel';
import { isValidImage } from '../utils/validationUtils';
import fs from 'fs';

/**
 * Uploads an image file to the server.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} - A promise that resolves when the image is uploaded successfully.
 */

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

    // Read the image data from the file in the 'uploads' folder
    const imageData = fs.readFileSync(req.file.path);

    // Create a new instance of the Image model
    const newImage = new Image({
      data: imageData,
      contentType: req.file.mimetype
    });

    // Save the image to MongoDB
    await newImage.save();
    res.status(200).json({ message: 'Image uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
};
