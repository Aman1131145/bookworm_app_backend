import mongoose from 'mongoose'
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected successfully')
    } catch (error) {
        console.error('Error connecting to database', error);
        ProcessingInstruction.exit(1);
    }
}