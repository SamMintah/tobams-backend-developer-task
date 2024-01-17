import { Request, Response } from 'express';
import Image from '../models/ImageModel';

/**
 * Retrieves an image from the database and sends it as a response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<void>} - A promise that resolves once the image is sent or an error occurs.
 */
const getImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const image = await Image.findOne();

    if (!image) {
      res.status(404).json({ message: 'No image found.' });
      return;
    }
    console.log(image)
    
    res.status(200).json({ imageUrl: `/get_image/${image._id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
};

export default { getImage };
