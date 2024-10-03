import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const [username, setUsername] = useState(""); // Add username state
    const url = "https://food-order-7izq.onrender.com";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
        if (token) {
            await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        if (token) {
            await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}})
        }
    }

    const allClearCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            delete newCartItems[itemId]; // Remove the item from the cart
            return newCartItems;
        });
    };

    const getTotalQuantity = () => {
        let totalQuantity = 0;
    
        for (const item in cartItems) {
            const quantity = cartItems[item];
            
            if (quantity > 0) {
                // Optionally, you can fetch itemInfo if needed
                const itemInfo = food_list.find((product) => product._id === item);
    
                if (itemInfo) {
                    // Accumulate the quantity of items in the cart
                    totalQuantity += quantity;
                } else {
                    console.warn(`Item with ID ${item} not found in food_list.`);
                }
            }
        }
    
        return totalQuantity;
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {

            if (cartItems[item] > 0) {            
                let itemInfo = food_list.find((product) => product._id === item);
                
                if(itemInfo.saleprice) {
                    totalAmount += itemInfo.saleprice* cartItems[item];
                } else {
                    totalAmount += itemInfo.price* cartItems[item];
                }
                
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        setFoodList (response.data.data);
        
    }

    const loadCartData = async (token) => {
        const response = await axios.post(`${url}/api/cart/get`,{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    const loadUserData = async (token) => {
        const response = await axios.get(`${url}/api/user/profile`, { headers: { token } });
        setUsername(response.data.username); // Assuming the API returns a user object with a username field
    };

    useEffect(()=> {
        async function localDate() {
            await fetchFoodList()
            if (localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
                await loadUserData(localStorage.getItem("token"));
            }
        }
        localDate();
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalQuantity,
        allClearCart,
        url,
        token,
        setToken,
        username
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
