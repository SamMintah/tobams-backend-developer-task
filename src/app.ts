import express from 'express';
import connectToDatabase from './utils/database';
import uploadRoutes from './routes/uploadRoutes';
import getImageRoutes from './routes/getImageRoutes';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/upload', uploadRoutes);
app.use('/get_image', getImageRoutes);

export default app;