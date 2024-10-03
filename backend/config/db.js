import mongoose from 'mongoose';

export const connectDB = async () => {
    
    try {
        await mongoose.connect('mongodb+srv://manindertechnext5:QOl0xpwlzgHMdNny@cluster0.j1b0o.mongodb.net/food-del', {
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}
