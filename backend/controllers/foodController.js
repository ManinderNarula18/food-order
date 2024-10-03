import foodModel from "../models/foodModel.js";
import fs from "fs"

// add food item

const addFood = async (req, res) => {
    // Check if the image file is uploaded
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image file is required." });
    }

    // Get the filename of the uploaded image
    const image_filename = req.file.filename;

    // Create a new food item
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        saleprice: req.body.saleprice,
        category: req.body.category,
        image: image_filename
    });

    try {
        // Save the food item to the database
        await food.save();
        return res.status(201).json({ success: true, message: "Food added successfully." });
    } catch (error) {
        console.error("Error saving food item:", error);
        return res.status(500).json({ success: false, message: "Error adding food item." });
    }
};

const editFood = async (req, res) => {
    const foodId = req.params.id;

    // Find the existing food item by ID
    let food;
    try {
        food = await foodModel.findById(foodId);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found." });
        }
    } catch (error) {
        console.error("Error finding food item:", error);
        return res.status(500).json({ success: false, message: "Error finding food item." });
    }

    // Update fields
    food.name = req.body.name || food.name;
    food.description = req.body.description || food.description;
    food.price = req.body.price || food.price;
    food.saleprice = req.body.saleprice || food.saleprice;
    food.category = req.body.category || food.category;

    // Check if a new image file is uploaded
    if (req.file) {
        // Optionally delete the old image if you want to replace it
        if (food.image) {
            fs.unlink(`uploads/${food.image}`, (err) => {
                if (err) {
                    console.error("Error deleting old image:", err);
                }
            });
        }
        food.image = req.file.filename; // Update image if new one is provided
    }

    try {
        // Save the updated food item to the database
        await food.save();
        return res.status(200).json({ success: true, message: "Food updated successfully." });
    } catch (error) {
        console.error("Error updating food item:", error);
        return res.status(500).json({ success: false, message: "Error updating food item." });
    }
};

const getFoodById = async (req, res) => {
    const foodId = req.params.id;
    console.log("Fetching food item with ID:", foodId); // Debug line

    try {
        const food = await foodModel.findById(foodId);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found." });
        }
        return res.status(200).json({ success: true, data: food });
    } catch (error) {
        console.error("Error fetching food item:", error);
        return res.status(500).json({ success: false, message: "Error fetching food item." });
    }
};

// all Food List
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error("Error fetching food list:", error); // Log the error for debugging
        res.status(500).json({ success: false, message: "Error fetching food list." });
    }
};

const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export { addFood, listFood, removeFood, editFood, getFoodById }