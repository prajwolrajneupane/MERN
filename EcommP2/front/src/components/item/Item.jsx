import React from 'react'
import "./Item.css"
function Item(props) {
  return (
    <div className='item w-[350px]'>
        <img src={props.image} alt="" />
        <p className='my-3 mx-0'>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
 <div className="item-price-old">
    ${
        props.old_price
    }
 </div>
        </div>
      
    </div>
  )
}

export default Item
