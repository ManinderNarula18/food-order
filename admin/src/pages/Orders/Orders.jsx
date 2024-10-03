import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Orders = ({url}) => {

  const [orders,setOreders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOreders(response.data.data);
      console.log(response.data.data)
    }
    else {
      toast.error
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders()
  },[])
  return (
    <section className="py-12 relative w-full">
      <div className="w-full px-4 md:px-5 lg:px-6 mx-auto gap-8 flex flex-col">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black">All Orders</h2>
        <div className="w-full gap-10 grid">
          {orders.map((order) => (
          <div key={order._id} className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl lg:max-w-full">
              <div className="grid grid-cols-2 gap-10 lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                <div className="data">
                    <p className="font-semibold text-base leading-7 text-black">
                    Order ID: <span className="text-indigo-600 font-medium">#{order._id}</span>
                    </p>
                    <p className="font-semibold text-base leading-7 text-black mt-2">
                    Order Date: <span className="text-gray-400 font-medium">{new Date(order.date).toLocaleDateString()}</span>
                    </p>
                    <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} class="w-2xl p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] leading-[26px] outline-[0] rounded-[10px] mt-2">
                      <option value="Food Processing">Food Processing</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                </div>
                <div className="data-right">
                  <p className="font-semibold text-base leading-7 text-black mt-2">
                      <span className="text-gray-400 font-medium">{order.address.firstName+" "+order.address.lastName}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-black mt-2">
                      <span className="text-gray-400 font-medium">{order.address.street+","}</span>
                  </p>
                  
                  <p className="font-semibold text-base leading-7 text-black mt-2">
                      <span className="text-gray-400 font-medium">{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</span>
                  </p>
                  
                </div>
              </div>
              <div className="w-full px-3 min-[400px]:px-6">
              {order.items.map((item) => (
                  <div key={item._id} className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                  <div className="img-box max-lg:w-full">
                      <img
                      src={url+"/images/"+item.image} // Dynamic image source
                      alt={item.name}
                      className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
                      />
                  </div>
                  <div className="flex flex-row items-center w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                      <div className="flex items-center">
                          <div>
                          <h2 className="font-semibold text-xl leading-8 text-black mb-3">{item.name}</h2>
                          <p className="font-normal text-lg leading-8 text-gray-500 mb-3">By: Dust Studios</p>
                          <div className="flex items-center">
                              <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                              Size: <span className="text-gray-500">1 each</span>
                              </p>
                              <p className="font-medium text-base leading-7 text-black">
                              Qty: <span className="text-gray-500">{item.quantity}</span>
                              </p>
                          </div>
                          </div>
                      </div>
                      <div className="grid grid-cols-5">
                          <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                          <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">Price</p>
                              <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">${item.saleprice || item.price}</p>
                          </div>
                          </div>
                          <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3">
                          <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">Status</p>
                              <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                              {order.status}
                              </p>
                          </div>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
              ))}
              </div>
              <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
              <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                  <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                  Paid <span className="text-gray-500"></span>
                  </p>
              </div>
              <p className="font-semibold text-lg text-black py-6">
                  Total Price: <span className="text-indigo-600">${order.amount}</span>
              </p>
              </div>
          </div>
          ))}
        </div>
      </div>
    </section>  
  )
}

export default Orders