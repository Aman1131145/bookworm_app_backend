import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import job from './lib/cron.js'

import authRoutes from './routes/authRoutes.js'
import bookRoutes from './routes/bookRoutes.js'

import { connectDB } from './lib/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

job.start();
app.use(express.json());
app.use(cors({
    origin: '*', // or '*' for all origins (not recommended for production)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true // if you're sending cookies/auth headers
}));

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB();
})