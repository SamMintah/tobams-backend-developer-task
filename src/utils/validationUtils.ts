/**
 * Checks if the provided MIME type corresponds to an allowed image format.
 *
 * @param {string} mimeType - The MIME type to be validated.
 * @returns {boolean} True if the MIME type is allowed for images, false otherwise.
 */

const isValidImage = (mimeType: string): boolean => {
  if (!mimeType) {
    return false;
  }
  // List of allowed image MIME types
  const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
  return allowedFormats.includes(mimeType);
};

export { isValidImage };
