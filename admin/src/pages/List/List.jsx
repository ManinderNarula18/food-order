import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const List = ({ url }) => {
  
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const fetchList = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Failed to fetch the list. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching list:", error);
            toast.error("An error occurred while fetching the list.");
        } finally {
            setLoading(false);
        }
    };

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
        if (response.data.success) {
            toast.success(response.data.message);
            fetchList();
        } else {
            toast.error("Error removing the item.");
        }
    };

    const editFood = (foodId) => {
        navigate(`/edit/${foodId}`); // Navigate to the edit page with food ID
    };

    useEffect(() => {
        fetchList();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='list-product w-full p-8 md:p-10'>
            <h1 className='text-brand-dark font-semibold text-xl'>Food List</h1>
            {list.length === 0 ? (
                <p>No items found.</p>
            ) : (
                <div className='list-prd-inner'>
                    {list.map(item => (
                        <div key={item._id} className="w-full h-auto flex justify-start items-center text-brand-light py-4 md:py-7 border-b border-border-one border-opacity-70 relative last:border-b-0">
                            <div className="group relative flex rounded overflow-hidden shrink-0 cursor-pointer w-[70px] md:w-[80px] h-[70px] md:h-[80px]">
                                <img src={`${url}/images/${item.image}`} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                                <div onClick={() => removeFood(item._id)} className="absolute top-0 flex items-center justify-center w-full h-full transition duration-200 ease-in-out bg-black left-0 right-0 bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30" role="button">
                                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="relative text-2xl text-white transition duration-300 ease-in-out" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-start justify-between w-full overflow-hidden">
                                <div className="pl-3 pr-3 md:pl-4 md:pr-4">
                                    <a className="block leading-5 transition-all text-brand-dark text-13px lg:text-[20px] hover:text-brand" href="">{item.name}</a>
                                    <div className="text-13px sm:text-sm text-brand-muted mt-1.5 block mb-2">{item.description}</div>
                                    <div className="text-13px sm:text-sm text-brand-muted mt-1.5 block mb-2">{item.category}</div>
                                </div>
                                <div className="font-semibold text-sm md:text-base text-brand-dark leading-5 shrink-0 min-w-[65px] md:min-w-[80px] justify-end">
                                    <p>Price</p>
                                    <p>${item.price}</p>
                                </div>
                                <div className="font-semibold text-sm md:text-base text-brand-dark leading-5 shrink-0 min-w-[65px] md:min-w-[80px] justify-end">
                                    <p>Sale Price</p>
                                    {item.saleprice ? <p>${item.saleprice}</p> : <></>}
                                </div>
                                <button onClick={() => editFood(item._id)} className="ml-4 p-2 bg-blue-500 text-white rounded">Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default List;
