import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,price,description,image,saleprice}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    
    <article className="food-item flex flex-col group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full" title={name}>
        <div className="relative shrink-0">
            <div className="food-item-img-container overflow-hidden mx-auto w-full h-[180px] md:h-[200px] relative">
                <img className='food-item-image group-hover:scale-105 transition duration-200 ease-in-out transform w-full h-full object-cover' src={url+"/images/"+image} alt={name}/>
                
            </div>
                
            <div className="food-item-info w-full h-full absolute top-0 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1">
                { saleprice 
                    ?<span className="text-[11px] md:text-xs font-bold uppercase inline-block  bg-indigo-600 text-white rounded-full px-2.5 pt-1 pb-[3px] mx-0.5 sm:mx-1">On Sale</span>
                    :<></>
                }
                
                { !cartItems[id]
                    ?<img className='food-item-counter add flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-brand lg:w-10 lg:h-10 focus:outline-none' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                    :<div className='food-item-counter flex items-center justify-center gap-2 text-3xl rounded-full bg-brand w-10 lg:h-10 focus:outline-none'>
                        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt='' />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                    </div>
                }
            </div>
        </div>
        <div className="flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-3 h-full">
            <h2 className="text-slate-950 text-13px sm:text-sm lg:text-[15px] mb-1.5">{name}</h2>
            <img className='max-w-max absolute right-[15px]' src={assets.rating_starts} alt={name} />
            <p className="food-item-dec text-[13px] mb-2">{description}</p>
            <div className="mb-1 lg:mb-2">
                {
                    saleprice ? (
                        <>
                        <span className="text-slate-950 font-bold text-base md:text-xl xl:text-[22px]">${saleprice}</span>
                        <del c="mx-1 text-sm text-slate-950 text-opacity-70">${price}</del>
                        </>
                    ) : (
                        <span className="text-slate-950 font-bold text-base md:text-xl xl:text-[22px]">${price}</span>
                    )
                }
                
            </div>
            <div className="mt-auto text-13px sm:text-sm">1 each</div>
        </div>
    </article>
  )
}

export default FoodItem