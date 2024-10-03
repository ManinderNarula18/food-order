import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = ({ url }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ name: '', description: '', price: '', saleprice: '', category: 'Salad', image: null });
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const apiUrl = `${url}/api/food/list/${id}`;
                console.log("Fetching food item with ID:", id);
                console.log("API URL:", apiUrl);
                
                const response = await axios.get(apiUrl);
                console.log("Response data:", response.data);
                
                if (response.data.success) {
                    setData(response.data.data);
                } else {
                    toast.error("Failed to fetch food details.");
                }
            } catch (error) {
                console.error("Error fetching food details:", error);
                toast.error("An error occurred while fetching food details.");
            } finally {
                setLoading(false);
            }
        };

        fetchFood();
    }, [id, url]);

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (data.price < 0 || (data.saleprice && data.saleprice < 0)) {
            toast.error("Price and Sale Price must be positive numbers.");
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', Number(data.price));
        formData.append('saleprice', Number(data.saleprice));
        formData.append('category', data.category);
        if (data.image) {
            formData.append('image', data.image);
        }

        setUpdating(true);
        try {
            const response = await axios.put(`${url}/api/food/update/${id}`, formData);
            if (response.data.success) {
                toast.success("Food updated successfully.");
                navigate('/list');
            } else {
                toast.error("Error updating food.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred while updating the food.");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return <p>Loading food details...</p>;
    }

    return (
        <div className='edit add text-black'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        {
                            !data.image
                            ? <></>
                            :<img
                                src={`${url}/images/${data.image}`}
                                alt='Upload Area'
                                style={{ cursor: 'pointer', width: '250px', height: 'auto' }} // Adjust styles as needed
                            />
                        }
                    
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type='file'
                        id='image'
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
                <button className='add-btn' type='submit' disabled={updating}>
                    {updating ? 'Updating...' : 'Update Food'}
                </button>
            </form>
        </div>
    );
};

export default Edit;
