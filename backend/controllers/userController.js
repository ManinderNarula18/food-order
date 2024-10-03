import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import nodemailer from "nodemailer";
import crypto from "crypto";

// Create Token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET); // Adding expiration for better security
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        // Create token
        const token = createToken(user._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error logging in" });
    }
};

// Register User
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Checking if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email and password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10); // Recommended to use 10 or higher
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        // Create token
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error registering user" });
    }
};

// Forgot Password User
const forgotPassword = async (req, res) => {

    const frontend_url = "http://localhost:5173";
    
    const { email } = req.body;

    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Generate a reset token
        const resetToken = crypto.randomBytes(32).toString("hex");

        // Store reset token in the user's document (you may need to create a resetToken field)
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 3600000; // 1 hour expiration
        await user.save();

        // Set up email transport
        const transporter = nodemailer.createTransport({
            service: "Gmail", // or any other email service
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Prepare email
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
        const mailOptions = {
            to: email,
            subject: "Password Reset",
            html: `<p>You requested a password reset. Click the link below to reset your password:</p>
                   <a href="${resetUrl}">Reset Password</a>`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "Reset link sent to your email." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error processing request" });
    }
};

// Reset Password User
const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        // Find user with the reset token
        const user = await userModel.findOne({ resetToken: token, resetTokenExpiration: { $gt: Date.now() } });
        if (!user) {
            return res.json({ success: false, message: "Invalid or expired token" });
        }

        // Hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update user password and clear reset token
        user.password = hashedPassword;
        user.resetToken = undefined; // Clear reset token
        user.resetTokenExpiration = undefined; // Clear expiration
        await user.save();

        res.json({ success: true, message: "Password has been reset successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error resetting password" });
    }
};

const userProfile = async (req, res) => {
    try {
        // Get the token from the request headers
        const token = req.headers.token;

        // Verify the token
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        const userId = decoded.id; // Extract user ID from the token

        // Fetch user data from the database
        const user = await userModel.findById(userId).select('-password'); // Exclude the password field

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Return user data
        res.json({ success: true, username: user.name, email: user.email }); // Adjust as needed
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { loginUser, registerUser, forgotPassword, resetPassword, userProfile };
