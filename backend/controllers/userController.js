import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator"

// login user

const loginUser = async(req,res) => {


}

// register user 
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        // checking if email for user already exists 
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exists"})
        }

        // validate email and strong password
    } catch (error) {
        
    }
}

export {loginUser,registerUser};