import express from 'express';
import connectToDatabase from './utils/database';
import uploadRoutes from './routes/uploadRoutes';
import getImageRoutes from './routes/getImageRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/upload', uploadRoutes);
app.use('/get_image', getImageRoutes);

export default app;