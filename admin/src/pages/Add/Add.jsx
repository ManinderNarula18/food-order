import React, { useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {
    
    const [image,setImage] = useState(null);
    
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        saleprice:"",
        category:"Salad"
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // Create FormData object to send the data
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("saleprice", Number(data.saleprice));
        formData.append("category", data.category);
        
        if (image) {
            formData.append("image", image);
        }

        try {
            const response = await axios.post(`${url}/api/food/add`, formData);

            if (response.data.success) {
                setData({ name: "", description: "", price: "", saleprice: "", category: "Salad" });
                setImage(null); // Clear image state
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
                // Handle error appropriately (e.g., display a message)
            }
        } catch (error) {
            console.error("Submission error:", error);
            // Handle error appropriately (e.g., display a user-friendly message)
        }
    };


  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className='add-img-upload flex-col'>
                <p>Upload Image</p>
                <label htmlFor='image'>
                    <img
                        src={image ? URL.createObjectURL(image) : assets.upload_area}
                        alt='Upload Area'
                        style={{ cursor: 'pointer', width: '250px', height: 'auto' }} // Adjust styles as needed
                    />
                </label>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type='file'
                    id='image'
                    hidden
                    required
                    accept="image/*" // Restrict to image file types
                />
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Enter Product Name Here' required />
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} rows="6" name='description' placeholder='Write Content Here' required ></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} name='category'>
                        <option value='Salad'>Salad</option>
                        <option value='Rolls'>Rolls</option>
                        <option value='Deserts'>Deserts</option>
                        <option value='Sandwich'>Sandwich</option>
                        <option value='Cake'>Cake</option>
                        <option value='Pure Veg'>Pure Veg</option>
                        <option value='Pasta'>Pasta</option>
                        <option value='Noodles'>Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$20' />
                </div>
                <div className="add-price flex-col">
                    <p>Product Sale Price</p>
                    <input onChange={onChangeHandler} value={data.saleprice} type='Number' name='saleprice' placeholder='$20' />
                </div>
            </div>
            
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add