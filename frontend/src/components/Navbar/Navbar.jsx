import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin, setShowCart}) => {
  const {getTotalQuantity, token, setToken, username} = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
  // console.log(token);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <header id="siteHeader" className="header-one w-full h-16 lg:h-20 z-30 sticky top-0 bg-white">
        <div className="z-20 w-full h-16 transition duration-200 ease-in-out innerSticky body-font bg-brand-light lg:h-20">
            <div className="flex items-center justify-between w-full h-full mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-14 2xl:py-4">
              <div className="flex shrink-0">
                  <button aria-label="Menu" className="flex-col items-center justify-center hidden outline-none menuBtn ltr:mr-5 rtl:ml-5 lg:flex xl:hidden shrink-0 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 25.567 18">
                        <g transform="translate(-776 -462)">
                        <rect data-name="Rectangle 941" width="12.749" height="2.499" rx="1.25" transform="translate(776 462)" fill="currentColor"></rect>
                        <rect data-name="Rectangle 942" width="25.567" height="2.499" rx="1.25" transform="translate(776 469.75)" fill="currentColor"></rect>
                        <rect data-name="Rectangle 943" width="17.972" height="2.499" rx="1.25" transform="translate(776 477.501)" fill="currentColor"></rect>
                        </g>
                    </svg>
                  </button>
                  <a href="/" className="inline-block focus:outline-none max-w-[154px] w-full -mt-1">
                    <img alt="BoroBazar" loading="lazy" decoding="async" src={assets.logo} />
                  </a>
              </div>
              <nav className="headerMenu">
                <ul className="navbar-menu flex w-full gap-14">
                  <Link to="/" onClick={() => setMenu("home")} className={ menu === "home" ? "active underline font-normal text-indigo-500" :""}>
                    Home
                  </Link>
                  <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active underline font-normal text-indigo-500 " :""}>
                    Menu
                  </a>
                  <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active underline font-normal text-indigo-500 " : ""}>
                    Mobile App
                  </a>
                  <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active underline font-normal text-indigo-500 ":""}>
                    Contact Us
                  </a>
                </ul>
              </nav>
              <div className="flex shrink-0 -mx-2.5 xl:-mx-3.5">
                <div onClick={() => setShowCart(true)} className="flex items-center justify-center shrink-0 h-auto focus:outline-none transform hidden lg:flex xl:mx-3.5 mx-2.5" aria-label="cart-button">
                  <div className="relative flex items-center">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-950 text-opacity-40">
                        <g >
                            <path d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z" fill="currentColor" stroke="currentColor"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                            <rect width="22" height="22" fill="white"></rect>
                            </clipPath>
                        </defs>
                      </svg>
                      {getTotalQuantity() === 0 ? "":<span className='min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] rounded-[20px] flex items-center justify-center bg-indigo-600 text-white absolute -top-2.5 left-2.5 right-2.5 text-[10px] font-bold'>{getTotalQuantity()}</span>}
                      
                  </div>
                  <span className="text-sm font-normal text-slate-950 ml-2 mr-2">Cart</span>
                </div>
                { !token
                  ?<div onClick={() => setShowLogin(true)} className="items-center hidden lg:flex shrink-0 xl:mx-3.5 mx-2.5 cursor-pointer">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-950 text-opacity-40">
                        <path d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z" fill="currentColor" stroke="currentColor"></path>
                        <path d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z" fill="currentColor" stroke="currentColor"></path>
                    </svg>
                    <button className="text-sm font-normal text-slate-950 focus:outline-none ml-2 mr-2" aria-label="Authentication">Sign In</button>
                  </div>
                  :<div className="xl:mx-3.5 mx-2.5">
                      <div className="relative z-10 lg:top-[1px] menu_log">
                          <button className="relative w-full py-2 rounded-lg cursor-pointer text-brand-dark ltr:pl-3 rtl:pr-3 ltr:pr-5 rtl:pl-5 ltr:text-left rtl:text-right focus:outline-none" type="button" aria-haspopup="listbox" aria-expanded="true">
                          <div className="items-center hidden lg:flex shrink-0 xl:mx-3.5 mx-2.5 cursor-pointer gap-2">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-950 text-opacity-40">
                                <path d="M20.9001 11C20.9001 5.52836 16.4723 1.09998 11.0001 1.09998C5.52848 1.09998 1.1001 5.52775 1.1001 11C1.1001 16.4231 5.49087 20.9 11.0001 20.9C16.4867 20.9 20.9001 16.448 20.9001 11ZM11.0001 2.26013C15.8193 2.26013 19.7399 6.1808 19.7399 11C19.7399 12.7629 19.2156 14.4573 18.2432 15.8926C14.3386 11.6924 7.66873 11.6849 3.75698 15.8926C2.78459 14.4573 2.26025 12.7629 2.26025 11C2.26025 6.1808 6.18092 2.26013 11.0001 2.26013ZM4.48056 16.8201C7.95227 12.926 14.0488 12.9269 17.5195 16.8201C14.0361 20.7172 7.96541 20.7184 4.48056 16.8201Z" fill="currentColor" stroke="currentColor"></path>
                                <path d="M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z" fill="currentColor" stroke="currentColor"></path>
                            </svg>
                            <p>{username}</p>
                          </div> 
                          </button>
                          <ul className="absolute ltr:right-0 rtl:left-0 lg:ltr:left-0 lg:rtl:right-0 w-full py-1 overflow-auto bg-brand-light rounded-md shadow-dropDown max-h-60 focus:outline-none text-sm min-w-[130px]" aria-labelledby="headlessui-listbox-button-:R37ifhfja:" aria-orientation="vertical" id="headlessui-listbox-options-:r3:" role="listbox">
                            <li><a href='/myorders'>Order</a></li>
                            <hr></hr>
                            <li onClick={logout}><p>Logout</p></li>
                          </ul>
                      </div>
                  </div>
                  
                }
                
              </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar