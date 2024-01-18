import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Connects to the database.
 *
 * @return {Promise<boolean>} Returns a promise that resolves to true if the connection is successful, and false otherwise.
 */
const connectToDatabase = async (): Promise<boolean> => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not defined in the environment variables');
      return false;
    }

    const options = { autoIndex: true, family: 4, maxPoolSize: 10 };
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Database connected');
    return true;
  } catch (error: any) {
    console.error('Error connecting to MongoDB. Reason:', error.message);
    return false;
  }
};

export default connectToDatabase;
