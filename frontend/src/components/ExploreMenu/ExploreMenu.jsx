import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from our diverse menu featuring a array of dishes.From sizzling hot mains to decadent desserts, every bite is a burst of flavor.
      Craving something comforting or bold? We’ve got just the dish to hit the spot.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=> {
          return (
            <div onClick={() => setCategory(prev =>prev===item.menu_name?"All" :item.menu_name)}key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active": ""}src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
