import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'

export default function Cart(){
    const cartContext = useContext(CartContext)

    const total = cartContext.cartItems.reduce((prev, item) => {
        return prev + Number(item.price) * item.count
    }, 0)


    const currentCartSingle = cartContext.cartItems.map(item => {
        if(item.count === 1) {
            return (
            <CartItem 
            key={Math.random() * 5000}
            id={item.id}
            img={item.img}
            name={item.item}
            description={item.description}
            price={item.price}
            />)
        } 
    })

    const currentCartMulti = cartContext.cartItems.filter(item => item.count > 1)
    .map(item => (
        <CartItem 
            key={Math.random() * 5000}
            count={item.count}
            id={item.id}
            img={item.img}
            name={item.item}
            description={item.description}
            price={item.price}
            />
    ))
    

    console.log(currentCartMulti)
    console.log(cartContext.cartItems)

    return (
        <div className="cart-page-container">
            <h2>{currentCartSingle.length ? 'Your Cart' : 'No Items In Cart'}</h2>
        {currentCartSingle}
        {currentCartMulti}
        <div className="total">
            <button className="btn">Check Out</button>
            <h3>Your Total: ${total.toFixed(2)}</h3>
        </div>
        </div>
    )
}