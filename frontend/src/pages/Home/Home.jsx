import React, { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import OfferApp from '../../components/OfferApp/OfferApp';

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Banner/>
        <div className='container m-auto'>
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
        </div>
        <OfferApp />
        
    </div>
  )
}

export default Home