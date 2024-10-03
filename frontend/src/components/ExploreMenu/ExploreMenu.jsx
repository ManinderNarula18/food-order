import React from 'react'

import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <section className='explore-menu text-center pb-0 max-w-7xl m-auto' id='explore-menu'>
        <h2>Explore Our menu</h2>
        <p className='explore-menu-text pb-14 max-w-[80ch] m-auto'>Choose from a diverse featuring a delecatable array of dishes. Our mission to satisfy your carvings and your dining experience, one delicious meal at a time.</p>
        <div className='explore-menu-list flex items-center justify-between w-full h-full mx-auto'>
            {menu_list.map((item,index) => {
                return (
                  <a onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="group block w-full text-center shrink-0 2xl:px-3.5 2xl:w-[12.5%] 3xl:w-1/9 mb-12" href="javascript:void(0)">
                    <div className={category===item.menu_name ? "active flex max-w-[178px] max-h-[178px] mb-3.5 xl:mb-4 mx-auto rounded-full overflow-hidden bg-fill-thumbnail" : "flex max-w-[178px] max-h-[178px] mb-3.5 xl:mb-4 mx-auto rounded-full overflow-hidden bg-fill-thumbnail"}>
                      <div className="flex shrink-0 transition-all duration-700 w-full h-full transform scale-50 group-hover:scale-100 -translate-x-full group-hover:translate-x-0">
                        <img alt={item.menu_name} loading="lazy" width="178" height="178" className="object-cover rounded-full aspect-square" src={item.menu_image}/></div>
                      <div className="flex shrink-0 transition-all duration-700 w-full h-full transform scale-100 group-hover:scale-50 -translate-x-full group-hover:translate-x-0">
                      <img alt={item.menu_name} loading="lazy" width="178" height="178" className="object-cover rounded-full aspect-square" src={item.menu_image}/>
                      </div>
                    </div>
                    <h4 className="text-sm capitalize truncate text-slate-950 sm:text-15px lg:text-base">{item.menu_name}</h4>
                  </a>
                )
            })}
        </div>
    </section>
  )
}

export default ExploreMenu