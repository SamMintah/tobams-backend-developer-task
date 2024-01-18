import { Request, Response } from 'express';
import path from 'path';
import Image from '../models/ImageModel';

/**
 * Retrieves an image by its ID and sends it as a response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<Response<any, Record<string, any>>>} The HTTP response with the image data.
 */
export const getImageById = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const imageId = req.params.id;
    const image = await Image.findById(imageId);

    if (!image) {
      return res.status(404).send('Image not found.');
    }

    const filePath = path.join('uploads', image.filename);
    res.status(200).json({
      message: 'Image retrieved successfully.',
      imageUrl: filePath
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
};

/**
 * Retrieves all images and sends image metadata as a response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @return {Promise<Response<any, Record<string, any>>>} The HTTP response with the images data.
 */
export const getAllImages = async (
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>> | undefined> => {
  try {
    const images = await Image.find();

    if (!images || images.length === 0) {
      return res.status(404).send('No images found.');
    }

    const imageMetadata = images.map((image) => ({
      id: image._id,
      imageUrl: `/get_image/${image._id}`,
      contentType: path.extname(image.filename).slice(1)
    }));
    
    res.status(200).json({
      success: true,
      message: 'Images retrieved successfully.',
      images: imageMetadata
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
};
