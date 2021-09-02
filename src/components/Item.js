import React, { useContext, useEffect } from 'react'
import CartContext from '../context/CartContext'


const imgStyles = {
    width: "300px",
    height: "300px",
    objectFit: "cover"
}


export default function Item({id, name, price, description, img}) {
    const cartContext = useContext(CartContext)

    const divRef = React.createRef()

    const notificationRef = React.createRef()

    useEffect(()=> {
        const div = divRef.current
        setTimeout(() => {
            div.classList.add('fade-in')
        }, 100);
    })

    function showNotification(){
        const notification = notificationRef.current
        notification.classList.add('show-notification')
        setTimeout(() => {
            notification.classList.remove('show-notification')
        }, 1000);
    }

    

    return (
        <div ref={divRef} className="item-container">
            <h3 ref={notificationRef} className="added-notification">Added To Cart!</h3>
            <h2 className="item-title">{name}</h2>
            <img alt="test" src={img} style={imgStyles}></img>
            
            <div className="item-info">
                <div>
                    <p>${price}</p>
                    <p>{description}</p>
                </div>
                <button 
                className="btn" 
                id={id}
                onClick={(e) => {
                    cartContext.addToCart(e)
                    showNotification()
                    }}>Add To Cart</button>
            </div>
            
        </div>
    )
}