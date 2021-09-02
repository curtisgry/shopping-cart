import React, { useContext } from 'react'
import CartContext from '../context/CartContext'


const imgStyles = {
    width: "200px",
    height: "200px",
    objectFit: "cover"
}


export default function CartItem({id, name, price, count, img}) {
    const cartContext = useContext(CartContext)

    

    
    return (
        <div className="cart-item-container">
            <div className="cart-item-left">
            <h2 className="cart-item-title">{name}</h2>
            <img alt="test" src={img} style={imgStyles}></img>
            </div>   
            <div className="cart-item-info">
                <div>
                    <p>${price}</p>
                    <div className="count-container">
                        <button id={id} onClick={cartContext.changeItemCount}>-</button>
                        <p>{count ? `x${count}` : 'x1'}</p>
                        <button id={id} onClick={cartContext.changeItemCount}>+</button>
                    </div>
                    
                </div>
                <button 
                className="btn" 
                id={id}
                onClick={cartContext.deleteFromCart}>Delete</button>
            </div>
            
        </div>
    )
}