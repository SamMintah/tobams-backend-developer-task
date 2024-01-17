import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async (): Promise<void> => {
  try {
    const options = { autoIndex: true, family: 4, maxPoolSize: 10 };
   await mongoose.connect(process.env.MONGODB_URI!, options);

    console.log("database connected");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
