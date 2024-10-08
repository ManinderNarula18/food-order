import React from 'react'

const Banner = () => {
  return (
    <div className="w-full bg-no-repeat bg-cover bg-center flex items-center  bg-indigo-200 hero-banner-six min-h-[400px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[650px] py-20 py:pt-24 2xl:bg-center" id="banner">
        <div className="mx-auto h-full flex flex-col text-center px-6 xl:max-w-[750px] 2xl:max-w-[850px] max-w-[480px] md:max-w-[550px]">
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-manrope font-extrabold leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 -mt-2 xl:-mt-3 2xl:-mt-4 text-brand-tree-dark xl:text-5xl 2xl:text-[55px]">Healthy vegetable that you deserve to eat fresh</h2>
            <p className="text-base md:text-[17px] xl:text-lg leading-7 md:leading-8 xl:leading-[1.92em] xl:px-16 text-slate-950 text-opacity-80 2xl:px-32">We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.</p>
            <div className="hidden lg:block max-w-[700px] mx-auto md:pt-1 lg:pt-3">
                <div className="lg:flex">
                <form className="relative flex w-full mt-6 rounded-md" role="search">
                    <label for="hero-search" className="flex flex-1 items-center py-0.5">
                        <input id="hero-search" className="w-full text-sm transition-all duration-200 outline-none text-slate-950/80 h-14 pl-5 pr-5 md:pl-6 md:pr-6 pr-14 pl-14 md:pr-16 md:pl-16 md:h-16 shadow-heroSearch placeholder:text-slate-950/50 rounded-md lg:text-base focus:ring-2 focus:ring-brand" placeholder="What are you looking..." aria-label="Search" autocomplete="off" /></label>
                    <button type="submit" title="Search" className="absolute top-0 flex items-center justify-center h-full transition duration-200 ease-in-out outline-none right-0 w-14 md:w-16 hover:text-heading focus:outline-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-slate-950 text-opacity-40">
                        <path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="currentColor"></path>
                    </svg>
                    </button>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Banner