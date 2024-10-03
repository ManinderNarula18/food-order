import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../components/context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const {cartItems, token, food_list, getTotalCartAmount, url} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
        navigate('/cart')
    }
    else if (getTotalCartAmount()===0){
        navigate('/')
    }
  },[token])

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        food_list.map((item)=>{
            if (cartItems[item._id]>0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        // console.log(orderItems);
        let orderData = {
            address:data,
            items:orderItems,
            amount:getTotalCartAmount()+2,
        }
        // let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
        const response = await axios.post(`${url}/api/order/place`,orderData,{headers:{token}});
        if (response.data.success) {
            const {session_url} = response.data;
            window.location.replace(session_url);
        } else {
            alert("Error");
        }
    }

  return (
      <section className="section-checkout py-[50px] max-[1199px]:py-[35px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <form onSubmit={placeOrder} method="post" className="flex flex-wrap w-full mb-[-24px]">
                <div className="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px]">
                    <div className="bb-checkout-contact border-[1px] border-solid border-[#eee] p-[20px] rounded-[20px] aos-init aos-animate">
                        <div className="main-title mb-[20px]">
                        <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">Billing Details</h4>
                        </div>
                        <div className="input-box-form mt-[20px]">
                            <div>
                                <div className="flex flex-wrap mx-[-12px]">
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">First Name *</label>
                                            <input type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="Enter your First Name" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">Last Name *</label>
                                            <input type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Enter your Last Name" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">Email *</label>
                                            <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Enter your Last Name" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">Phone *</label>
                                            <input type="text" name="phone" onChange={onChangeHandler} value={data.phone} placeholder="Enter Phone Number" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    <div className="w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">Address *</label>
                                            <input type="text" name="street" onChange={onChangeHandler} value={data.street} placeholder="Address Line 1" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                    <div className="input-item mb-[24px]">
                                        <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">City *</label>
                                        <input type="text" name="city" onChange={onChangeHandler} value={data.city} placeholder="Address Line 1" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                    </div>
                                    </div>
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">Post Code *</label>
                                            <input type="tel" name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder="Post Code" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">Country *</label>
                                            <input type="text" name="country" onChange={onChangeHandler} value={data.country} placeholder="Address Line 1" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    <div className="min-[992px]:w-[50%] w-full px-[12px]">
                                        <div className="input-item mb-[24px]">
                                            <label className="inline-block leading-[26px] tracking-[0.02rem] mb-[8px] text-[14px] font-medium text-[#3d4750]">Region State *</label>
                                            <input type="text" name="state" onChange={onChangeHandler} value={data.state} placeholder="Address Line 1" className="w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px]" required />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
                <div className="bb-checkout-sidebar mb-[-24px]">
                    <div className="checkout-items border-[1px] border-solid border-[#eee] p-[20px] rounded-[20px] mb-[24px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <div className="sub-title mb-[12px]">
                            <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">summary</h4>
                        </div>
                        <div className="bb-checkout-pro mb-[15px]">
                            {food_list.map((item,index)=>{
                                if(cartItems[item._id]>0)
                                {
                                    return(
                                    <div className="group w-full h-auto flex justify-start items-center text-brand-light py-5 border-b border-border-one border-opacity-70 relative last:border-b-0">
                                        <div className="relative flex rounded overflow-hidden shrink-0 w-[64px] h-[50px]">
                                            <img loading="lazy" width="100" height="100" className="object-cover bg-fill-thumbnail" src={url+"/images/"+item.image} alt={item.name} />
                                        </div>
                                        <div className="flex items-start justify-between w-full overflow-hidden">
                                            <div className="pl-3 pr-3 md:pl-4 md:pr-4">
                                                <a className="block leading-5 transition-all text-brand-dark text-13px sm:text-sm lg:text-15px hover:text-brand" href="#"><p>{item.name}</p></a>
                                                <div className="text-13px sm:text-sm text-brand-muted mt-1.5 block mb-2">
                                                ${
                                                    item.saleprice 
                                                    ?item.saleprice
                                                    :item.price
                                                }
                                                    <span className='pl-1'>each x</span> {cartItems[item._id]}
                                                </div>
                                                
                                            </div>
                                            <div className="flex font-semibold text-sm md:text-base text-brand-dark leading-5 shrink-0 min-w-[65px] md:min-w-[80px] justify-end">
                                                {
                                                    item.saleprice 
                                                    ?<p>${item.saleprice*cartItems[item._id]}</p>
                                                    :<p>${item.price*cartItems[item._id]}</p>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    )
                                    }
                                })}
                        </div>
                        <div className="checkout-summary border-t border-solid border-[#eee]">
                            <ul className="mb-[20px]">
                            <li className="flex justify-between leading-[28px] border-b py-4 border-border-base">
                                <span className="left-item leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">Subtotal</span>
                                <span className="leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">${getTotalCartAmount()}</span>
                            </li>
                            <li className="flex justify-between leading-[28px] border-b py-4 border-border-base">
                                <span className="left-item leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">Delivery Charges</span>
                                <span className="leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">${getTotalCartAmount()=== 0?0:2}</span>
                            </li>
                            <li className="flex justify-between leading-[28px] mb-[8px] border-b py-4 border-border-base">
                                <span className="left-item leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">Total</span>
                                <span className="leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#686e7d]">
                                    ${getTotalCartAmount()=== 0?0:getTotalCartAmount()+2}</span>
                            </li>                                 
                            </ul>
                            <div className="w-full">
                            <div className="input-button">
                                <button type="submit" className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-indigo-600 rounded font-semibold text-sm sm:text-15px text-white bg-brand focus:outline-none transition duration-300 hover:bg-opacity-90">Place Order</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="checkout-items border-[1px] border-solid border-[#eee] p-[20px] rounded-[20px] mb-[24px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        <div className="sub-title mb-[12px]">
                            <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">Payment Method</h4>
                        </div>
                        <div className="checkout-method mb-[24px]">
                            <span className="details leading-[26px] tracking-[0.02rem] text-[15px] font-medium text-[#686e7d]">Please select the preferred shipping method to use on this
                                order.</span>
                            <div className="bb-del-option mt-[12px] flex max-[480px]:flex-col">
                                <div className="inner-del w-[50%] max-[480px]:w-full">
                                    <div className="radio-itens">
                                        <input type="radio" id="Cash1" name="radio-itens" className="p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]" />
                                        <label for="Cash1" className="relative pl-[12px] cursor-pointer leading-[16px] inline-block text-[#686e7d] tracking-[0]">Cash On Delivery</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="checkout-items border-[1px] border-solid border-[#eee] p-[20px] rounded-[20px] mb-[24px] aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                        <div className="sub-title mb-[12px]">
                            <h4 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">Payment Method</h4>
                        </div>
                        <div className="payment-img">
                            <img src={assets.payment} alt="payment" className="w-full" />
                        </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
      </section>
  )
}

export default PlaceOrder