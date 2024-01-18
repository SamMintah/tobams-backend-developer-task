import mongoose, { Schema, Document } from 'mongoose';

interface IImage extends Document {
  filename: string;
  contentType: String;
}

const ImageSchema: Schema = new Schema(
  {
    filename: String,
    contentType: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IImage>('Image', ImageSchema);
