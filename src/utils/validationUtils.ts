const isValidImage = (mimeType: string): boolean => {
    // List of allowed image MIME types
    const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
  
    // Check if the provided MIME type is in the allowed formats
    return allowedFormats.includes(mimeType);
  };
  
  export { isValidImage };
  