import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="mt-[50px] lg:mt-14 2xl:mt-16" id="footer">
        <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
            <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px]">
                <div className="pb-10 sm:pb-0 mb-4 border-b col-span-full sm:col-span-1 md:col-span-3 sm:border-b-0 border-border-three sm:mb-0">
                    <div className="flex flex-col text-center sm:text-left max-w-[300px] mx-auto sm:ml-0 sm:mr-0 pb-6 sm:pb-5">
                        <a className="inline-block focus:outline-none max-w-[131px] w-full mx-auto mb-3 lg:mb-5 sm:ml-0 sm:mr-0" href="/"><img alt="BoroBazar" loading="eager" decoding="async" src={assets.logo} /></a>
                        <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px">We offer high-quality foods and the best delivery service, and the food market you can blindly trust</p>
                    </div>
                    <ul className="flex flex-wrap justify-center mx-auto sm:justify-start">
                        <li className="transition hover:opacity-80 last:mr-0 md:mr-5 md:mx-0 mr-4">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                                <img alt="facebook" loading="lazy" width="20" height="20" className="transform scale-85 md:scale-100" src={assets.facebook_icon} />
                            </a>
                        </li>
                        <li className="transition hover:opacity-80 last:mr-0 md:mr-5 md:mx-0 mr-4"><a target="_blank" rel="noreferrer" href="https://twitter.com/"><img alt="twitter" loading="lazy" width="20" height="20" className="transform scale-85 md:scale-100" 
                        src={assets.twitter_icon} /></a></li>
                        <li className="transition hover:opacity-80 last:mr-0 md:mr-5 md:mx-0 mr-4"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/"><img alt="instagram" loading="lazy" width="20" height="20" className="transform scale-85 md:scale-100" 
                        src={assets.instagram_icon} /></a></li>
                        <li className="transition hover:opacity-80 last:mr-0 md:mr-5 md:mx-0 mr-4">
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw">
                                <img alt="youtube" loading="lazy" width="20" height="20" className="transform scale-85 md:scale-100" src={assets.youtube_icon} />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
                    <h3 className="text-slate-950 text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">About Us</h3>
                    <ul className="flex flex-col space-y-3 text-sm lg:text-15px">
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en/about-us">About us</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en/contact-us">Contact us</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en/about-us">About team</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en/contact-us">Customer Support</a></li>
                    </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
                    <h3 className="text-slate-950 text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">Our Information</h3>
                    <ul className="flex flex-col space-y-3 text-sm lg:text-15px">
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en/privacy">Privacy policy update</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en/terms">Terms &amp; conditions</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en/privacy">Return Policy</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="/en">Site Map</a></li>
                    </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
                    <h3 className="text-slate-950 text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">Community</h3>
                    <ul className="flex flex-col space-y-3 text-sm lg:text-15px">
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="">Announcements</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="">Answer center</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="">Discussion boards</a></li>
                        <li className="flex items-baseline"><a className="transition-colors duration-200 hover:text-slate-950" href="">Giving works</a></li>
                    </ul>
                </div>
                <div className="flex flex-col pt-8 border-t col-span-full sm:col-span-1 md:col-start-4 xl:col-start-auto md:col-span-4 xl:col-span-3 xl:pl-6 xl:pr-6 sm:pt-0 sm:border-t-0 border-border-three 2xl:pl-7 2xl:pr-7 3xl:pl-16 3xl:pr-16">
                    <h3 className="text-slate-950 text-base lg:text-[17px] lg:leading-7 font-medium mb-4 lg:mb-6 lg:pb-0.5">Subscribe Now</h3>
                    <p className="text-brand-muted text-sm leading-7 lg:leading-[27px] lg:text-15px lg:-mt-1 max-w-[400px]">Subscribe your email for newsletter and featured news based on your interest</p>
                    <form className="relative mt-5 max-w-[400px]">
                        <span className="flex items-center absolute left-0 top-0 h-12 px-3.5 transform">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 2xl:w-[18px] h-4 2xl:h-[18px]">
                                <g clip-path="url(#clip0)">
                                    <path d="M16.3125 2.25H1.68751C0.75696 2.25 0 3.00696 0 3.93751V14.0625C0 14.9931 0.75696 15.75 1.68751 15.75H16.3125C17.243 15.75 18 14.9931 18 14.0625V3.93751C18 3.00696 17.243 2.25 16.3125 2.25ZM16.3125 3.375C16.3889 3.375 16.4616 3.39085 16.5281 3.41854L9 9.94319L1.47188 3.41854C1.53834 3.39089 1.61105 3.375 1.68747 3.375H16.3125ZM16.3125 14.625H1.68751C1.37715 14.625 1.125 14.3729 1.125 14.0625V4.60711L8.6314 11.1127C8.73743 11.2044 8.86872 11.25 9 11.25C9.13128 11.25 9.26256 11.2044 9.3686 11.1127L16.875 4.60711V14.0625C16.875 14.3729 16.6228 14.625 16.3125 14.625Z" fill="#B3B3B3"></path>
                                </g>
                            </svg>
                        </span>
                        <div className="w-full">
                            <input id="subscription-email" type="email" placeholder="Write your email here" className="py-2 px-4 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded placeholder-[#B3B3B3] min-h-12 transition duration-200 ease-in-out text-slate-950 focus:ring-0 text-slate-950 border-border-two focus:border-2 focus:outline-none focus:border-brand h-11 md:h-12 pl-10 pr-10 2xl:px-11 h-12 rounded-md" autocomplete="off" spellcheck="false" aria-invalid="false" name="email" />
                        </div>
                        <button className="absolute right-0  top-0 hover:opacity-80 focus:outline-none h-12 px-3 lg:px-3.5 transform scale-90 2xl:scale-100" aria-label="Subscribe Button">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] 2xl:w-5 h-[18px] 2xl:h-5">
                                <g clip-path="url(#clip0)">
                                    <path d="M18.809 8.21633L2.67252 1.52062C1.99272 1.23851 1.22471 1.36262 0.668264 1.84434C0.111818 2.32613 -0.120916 3.06848 0.0609589 3.78164L1.49725 9.41414H8.52951C8.85311 9.41414 9.11549 9.67648 9.11549 10.0001C9.11549 10.3237 8.85315 10.5861 8.52951 10.5861H1.49725L0.0609589 16.2186C-0.120916 16.9318 0.111779 17.6741 0.668264 18.1559C1.22584 18.6386 1.99393 18.7611 2.67256 18.4796L18.809 11.7839C19.5437 11.4791 20.0001 10.7955 20.0001 10.0001C20.0001 9.20469 19.5437 8.52113 18.809 8.21633Z" fill="#02B290"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="20" height="20" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="pb-20 lg:pb-7">
            <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
                <div className="flex flex-col pt-6 text-center border-t md:flex-row md:justify-between border-border-three lg:pt-7">
                    <p className="text-slate-950 text-sm leading-7 lg:leading-[27px] lg:text-15px">
                        ©&nbsp; Copyright 2024 &nbsp;<span className='underline cursor-pointer font-bold text-indigo-500'>Maninder Narula</span>&nbsp; All rights reserved
                    </p>
                    <ul className="flex flex-wrap justify-center items-center -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
                        <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 mr-4 sm:mr-5 lg:mr-7 last:mr-0"><a href="/" target="_blank" className="inline-flex" rel="noreferrer"><img alt="Master Card" loading="lazy" width="34" height="20" 
                        src={assets.mastercard} /></a></li>
                        <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 mr-4 sm:mr-5 lg:mr-7 last:mr-0"><a href="/" target="_blank" className="inline-flex" rel="noreferrer"><img alt="Visa" loading="lazy" width="50" height="20" 
                        src={assets.visa} /></a></li>
                        <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 mr-4 sm:mr-5 lg:mr-7 last:mr-0"><a href="/" target="_blank" className="inline-flex" rel="noreferrer"><img alt="Paypal" loading="lazy" width="76" height="20" 
                        src={assets.paypal} /></a></li>
                        <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 mr-4 sm:mr-5 lg:mr-7 last:mr-0"><a href="/" target="_blank" className="inline-flex" rel="noreferrer"><img alt="JCB" loading="lazy" width="26" height="20" 
                        src={assets.jcb} /></a></li>
                        <li className="inline-flex mb-2 transition md:mb-0 hover:opacity-80 mr-4 sm:mr-5 lg:mr-7 last:mr-0"><a href="/" target="_blank" className="inline-flex" rel="noreferrer"><img alt="Skrill" loading="lazy" width="39" height="20" 
                        src={assets.skrill} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer