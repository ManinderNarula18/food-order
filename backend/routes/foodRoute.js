import express from "express";
import { addFood, listFood, removeFood, editFood, getFoodById } from "../controllers/foodController.js";
import multer from "multer";

// Create a router instance
const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

// Define the routes

foodRouter.post("/add", upload.single("image"), addFood); // Add food
foodRouter.get("/list", listFood); // List all foods
foodRouter.get("/list/:id", getFoodById); // Get food by ID
foodRouter.post("/remove", removeFood); // Remove food
foodRouter.put("/update/:id", upload.single("image"), editFood); // Update food

export default foodRouter;
