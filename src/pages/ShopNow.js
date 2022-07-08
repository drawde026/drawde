import React from 'react'
import { ShopList } from '../pages/ShopList'
import ShopItem from '../pages/ShopItem'
import "../components/ShopNow.css"

function ShopNow() {
  return (
    <div className='shop'>
      <h1 className='shopTitle'>OXYGEN</h1>
      <div className='shopList'>
      {ShopList.map ((shopItem,key)=>{
        return(
          <ShopItem 
          key={key}
          image={shopItem.image}
          name={shopItem.name}
          price={shopItem.price}

          />
      )})}

      </div>
    </div>
  )
}

export default ShopNow
