import fs from 'fs';
import { Request, Response } from 'express';
import Image from '../models/ImageModel';
import { isValidImage } from '../utils/validationUtils';

/**
 * Uploads an image file to the server and saves it to the database.
 *
 * @param {Request} req - the request object containing the file to be uploaded
 * @param {Response} res - the response object to send the result of the upload
 * @return {Promise<void>} - a Promise that resolves when the upload is complete
 */
export const uploadImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).send('No image file provided.');
      return;
    }

    if (!isValidImage(req.file.mimetype)) {
      res.status(400).send( 'Invalid image file format.');
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
