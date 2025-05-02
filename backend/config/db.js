import mongoose from 'mongoose';

export const connectDB = async () => {
    
    try {
        await mongoose.connect('mongodb+srv://manindersnarula:QNjxdiRKK3yU9KIz@foodonline.zhls3io.mongodb.net/?retryWrites=true&w=majority&appName=FoodOnline', {
        }); 
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}
