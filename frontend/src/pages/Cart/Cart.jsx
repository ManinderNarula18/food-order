import React, { useContext, useState } from 'react'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = ({setShowCart}) => {

  const [currState,setCurrState] = useState(true)

  const {cartItems,food_list,removeFromCart, getTotalCartAmount, setCartItems,url} = useContext(StoreContext);

  const allClearCart = () => {
    setCartItems(() => ({})); // Set the cart items to an empty object
  };

  const navigate = useNavigate();
  return (
    
    <div className="rc-drawer rc-drawer-right rc-drawer-open">
      <div className="rc-drawer-mask"></div>
      <div className="rc-drawer-content-wrapper w-[450px]">
          <div className="rc-drawer-content" role="dialog" aria-modal="true">
              <div className="flex flex-col justify-between w-full h-full">
                  <div className="relative flex items-center justify-between w-full border-b pl-5 md:pl-7 border-border-base">
                      <h3 className="text-brand-dark font-semibold text-brand-dark text-xl">Shopping Cart</h3>
                      <div className="flex items-center">
                            <button onClick={()=> allClearCart()} className="flex flex-shrink items-center text-15px transition duration-150 ease-in focus:outline-none text-brand-dark opacity-50 hover:opacity-100 -mr-1.5 -ml-1.5" aria-label="Clear All">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M14.3546 3.46335L13.207 16.5406H4.79372L3.64636 3.46335L2.1925 3.59079L3.36082 16.9052C3.42231 17.5189 3.95478 18 4.57336 18H13.4274C14.0458 18 14.5784 17.5191 14.6409 16.8964L15.8085 3.59079L14.3546 3.46335Z" fill="black"></path>
                                        <path d="M11.6758 0H6.32445C5.65381 0 5.10822 0.54559 5.10822 1.21623V3.52705H6.56766V1.45944H11.4325V3.52702H12.8919V1.2162C12.892 0.54559 12.3464 0 11.6758 0Z" fill="black"></path>
                                        <path d="M16.7838 2.79724H1.21625C0.813183 2.79724 0.486511 3.12391 0.486511 3.52698C0.486511 3.93005 0.813183 4.25672 1.21625 4.25672H16.7838C17.1869 4.25672 17.5136 3.93005 17.5136 3.52698C17.5136 3.12391 17.1869 2.79724 16.7838 2.79724Z" fill="black"></path>
                                    </g>
                                </svg>
                                <span className="pl-1 lg:pr-1">Clear All</span>
                            </button>
                            <button onClick={() => setShowCart(false)} className="flex items-center justify-center px-4 py-6 text-2xl transition-opacity md:px-6 lg:py-7 focus:outline-none text-brand-dark hover:opacity-60" aria-label="close">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                                </svg>
                            </button>
                      </div>
                  </div>
                  <div data-overlayscrollbars-initialize="" data-overlayscrollbars="host">
                      <div className="os-size-observer">
                          <div className="os-size-observer-listener"></div>
                      </div>
                      <div data-overlayscrollbars-contents="">
                          <div className="w-full px-5 md:px-7 h-[calc(100vh_-_300px)] overflow-auto">
                          {food_list.map((item,index)=>{
                            if(cartItems[item._id]>0)
                              {
                                return(
                                  <div className="group w-full h-auto flex justify-start items-center text-brand-light py-4 md:py-7 border-b border-border-one border-opacity-70 relative last:border-b-0">
                                      <div className="relative flex rounded overflow-hidden shrink-0 cursor-pointer w-[90px] md:w-[100px] h-[90px] md:h-[100px]">
                                          <img loading="lazy" width="100" height="100" className="object-cover bg-fill-thumbnail" src={url+"/images/"+item.image} alt={item.name} />
                                          <div onClick={()=> removeFromCart(item._id)} className="absolute top-0 flex items-center justify-center w-full h-full transition duration-200 ease-in-out bg-black left-0 right-0 bg-opacity-30 md:bg-opacity-0 md:group-hover:bg-opacity-30" role="button">
                                              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="relative text-2xl text-white transition duration-300 ease-in-out transform md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z"></path>
                                              </svg>
                                          </div>
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
                      </div>
                      <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable" >
                          <div className="os-scrollbar-track">
                              <div className="os-scrollbar-handle"></div>
                          </div>
                      </div>
                      <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-auto-hide-hidden os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-visible" >
                          <div className="os-scrollbar-track">
                              <div className="os-scrollbar-handle"></div>
                          </div>
                      </div>
                  </div>
                  <div className="px-5 pt-5 pb-5 border-t border-border-base md:px-7 md:pt-6 md:pb-6 bg-white z-40">
                        <div className="flex pb-5 md:pb-7">
                          <div className="pr-3 pl-3">
                              <h3 className="text-brand-dark text-15px sm:text-base font-semibold mb-2.5">Subtotal:</h3>
                              <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px leading-6">Final price and discounts will be determined at the time of payment processing.</p>
                          </div>
                          <div className="shrink-0 font-semibold text-base md:text-lg text-brand-dark -mt-0.5 min-w-[80px] text-right text-left">{getTotalCartAmount()}</div>
                        </div>
                        <div onClick={() => getTotalCartAmount() > 0 && navigate('/order') || setShowCart(false)} className="flex flex-col">
                            <a
                                className={`w-full px-5 py-3 md:py-4 flex items-center justify-center rounded font-semibold text-sm sm:text-15px text-white focus:outline-none transition duration-300 ${getTotalCartAmount() > 0 ? 'bg-indigo-600 hover:bg-opacity-90' : 'bg-gray-400 cursor-not-allowed'}`}
                                onClick={getTotalCartAmount() > 0 ? () => navigate('/order') : null}
                            >
                                <span className="py-0.5">{getTotalCartAmount() > 0 ? 'Proceed To Checkout' : 'Cart is Empty'}</span>
                            </a>
                        </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Cart