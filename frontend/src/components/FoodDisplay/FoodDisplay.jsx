import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

    
  return (
    <div className='food-display' id='food-dispal'>
        <h3 className='mb-7'>Top dishes near you</h3>
        <div className='food-dislay-list grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 2xl:gap-5'>
            {food_list.map((item,index)=> {

              if(category==="All" || category === item.category ){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} saleprice={item.saleprice} price={item.price} image={item.image} sale={item.sale}/>
              }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay