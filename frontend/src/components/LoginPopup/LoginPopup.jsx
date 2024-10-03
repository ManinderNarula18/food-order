import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from "axios"


const LoginPopup = ({setShowLogin}) => {

    const [showPassword, setShowPassword] = useState(false)
    const {url, setToken} = useContext(StoreContext)
    const [currState,setCurrState] = useState("Login")
    const [data, setData] = useState({
        name:"",
        email: "",
        password: ""
    })

    const onchanegeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data,[name]:value}))
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    
    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data );
    
        if (response.data.success) {
            // Handle successful login or registration
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token); // Save token
            setShowLogin(false)
            // window.location.href = '/dashboard'; // Redirect to the dashboard or home page
        } else {
            // Handle error message
            alert(response.data.message || 'An error occurred');
        }
    };
    
  return (
    <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto">
        <div className="min-h-screen lg:px-4 text-center justify-center flex items-center">
            <div className="fixed inset-0 z-40 cursor-pointer bg-gray-900/70" id="headlessui-dialog-overlay-:rq:"></div>
            
            <div className="relative z-50 inline-block w-full p-4 overflow-hidden align-middle transition-all transform md:w-auto md:p-6 xl:p-8 text-left text-right">
                <div className="relative rounded-md">
                        <button onClick={() => setShowLogin(false)} aria-label="Close Button" className="fixed z-10 inline-flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 transition duration-200 text-brand-dark text-opacity-50 focus:outline-none  hover:text-opacity-100 top-0.5 md:top-2 lg:top-7 xl:top-10 right-0.5 md:right-2 lg:right-7 xl:right-10 bg-brand-light lg:bg-transparent rounded-full">
                            <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="text-xl lg:text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                            </svg>
                        </button>
                    <div className="w-full md:w-[720px] lg:w-[920px] xl:w-[1000px] 2xl:w-[1200px] relative">
                        
                        <div className="flex mx-auto overflow-hidden rounded-lg bg-brand-light">
                            <div className="md:w-1/2 lg:w-[55%] xl:w-[58%] registration hidden md:block relative">
                            {
                               currState === "Sign Up"
                               ?<img className="w-full h-full" alt="signin" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" src={assets.register} />
                               : <img className="w-full h-full" alt="signin" loading="lazy" decoding="async" data-nimg="fill" sizes="100vw" src={assets.logiImage} />
                            }
                                
                            </div>
                            <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[45%] py-6 sm:py-10 px-4 sm:px-8 md:px-6 lg:px-8 xl:px-12 rounded-md flex flex-col justify-center bg-white">
                                <div className="mb-6 text-center">
                                    <div>
                                        <a className="inline-block focus:outline-none max-w-[131px] w-full" href="/">
                                            <img alt="BoroBazar" loading="lazy" decoding="async" src={assets.logo} />
                                        </a>
                                    </div>
                                    {
                                        currState === "Login" 
                                        ?<h4 className="text-xl font-semibold text-brand-dark sm:text-2xl sm:pt-3">Welcome Back!</h4>
                                        :<h4 className="text-xl font-semibold text-brand-dark sm:text-2xl sm:pt-3">SignUp for free!</h4>

                                    }
                                    {
                                        currState === "Login" 
                                        ?<div className="mt-3 mb-1 text-sm text-center sm:text-15px text-body">Don’t have an account?
                                            <button type="button" onClick={() => setCurrState("Sign Up")} className="text-sm font-semibold text-brand sm:text-15px ml-1 mr-1 hover:no-underline focus:outline-none">Create Account</button>
                                        </div>
                                        :<div className="mt-3 mb-1 text-sm text-center sm:text-15px text-body">Already registered?
                                            <button type="button" onClick={() => setCurrState("Login")} className="text-sm font-semibold text-brand sm:text-15px ml-1 mr-1 hover:no-underline focus:outline-none">Sign In Now</button>
                                        </div>
                                    }
                                    
                                </div>
                                <form onSubmit={onLogin} className="flex flex-col justify-center">
                                    <div className="flex flex-col space-y-3.5">
                                        {
                                            
                                            currState === "Sign Up"
                                            ?<div className="block">
                                            
                                                <label htmlFor="name" className="text-left block font-normal text-sm leading-none mb-3 cursor-pointer text-brand-dark text-opacity-70">Full Name</label>
                                                <input id="name"  placeholder="" className="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark focus:ring-0 text-brand-dark border-border-two focus:border-2 focus:outline-none focus:border-brand h-11 md:h-12" autocomplete="off" aria-invalid="false" type="text" name="name" onChange={onchanegeHandler} value={data.name} />
                                            </div>
                                            :<></>
                                        }
                                        <div className="block">
                                            
                                            <label htmlFor="email" className="text-left block font-normal text-sm leading-none mb-3 cursor-pointer text-brand-dark text-opacity-70">Email Address</label>
                                            <input id="email" placeholder="" className="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-brand-dark focus:ring-0 text-brand-dark border-border-two focus:border-2 focus:outline-none focus:border-brand h-11 md:h-12" autocomplete="off" aria-invalid="false" type="email" name="email" onChange={onchanegeHandler} value={data.email} /></div>
                                        <div className="block">
                                            <label htmlFor="password" className="text-left block mb-3 text-sm font-normal leading-none cursor-pointer text-brand-dark opacity-70">Password</label>
                                            <div className="relative">
                                                <input
                                                    id="password"
                                                    className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded-md placeholder-[#B3B3B3] transition duration-200 ease-in-out text-brand-dark border-border-two focus:border-2 focus:outline-none focus:ring-0 focus:border-brand h-11 md:h-12"
                                                    autoComplete="off"
                                                    type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                                    name="password"
                                                    onChange={onchanegeHandler}
                                                    value={data.password}
                                                />
                                                <label
                                                    htmlFor="password"
                                                    onClick={togglePasswordVisibility} // Reference to the function
                                                    className="absolute -mt-2 cursor-pointer right-4 top-5 text-brand-dark text-opacity-30"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            
                                            <div className="flex ml-auto mt-[3px]">
                                                {
                                                    currState === "Sign Up"
                                                    ?<></>
                                                    : <button type="button" className="text-sm text-right text-left text-heading pl-3 lg:pr-3 hover:no-underline hover:text-brand-dark focus:outline-none focus:text-brand-dark">Forgot password?</button>
                                                }
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <button className="group text-[13px] md:text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-11 md:h-[50px] bg-indigo-500 text-white font-manrope px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 focus:bg-opacity-70 w-full mt-2 tracking-normal h-11 md:h-12 font-15px md:font-15px" type="submit">
                                                {
                                                    currState === "Sign Up"
                                                    ? "Create Account"
                                                    : "Login"
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPopup