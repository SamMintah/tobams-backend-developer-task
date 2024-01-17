import mongoose, { Schema, Document } from 'mongoose';

interface IImage extends Document {
  data: Buffer;
  contentType: string;
}

const ImageSchema: Schema = new Schema({
  data: Buffer,
  contentType: String,
});

export default mongoose.model<IImage>('Image', ImageSchema);
