import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://cute:cute123!@cluster0.apwxrku.mongodb.net/food-del').then(()=> console.log("DB connected!"));
}