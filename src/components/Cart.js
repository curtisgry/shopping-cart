import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import CartItem from './CartItem'
import Modal from './Modal'

export default function Cart(){
    const cartContext = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false)

    const total = cartContext.cartItems.reduce((prev, item) => {
        return prev + Number(item.price) * item.count
    }, 0)


    const currentCartSingle = cartContext.cartItems.map(item => {
            return (
            <CartItem 
            key={Math.random() * 5000}
            count={item.count}
            id={item.id}
            img={item.img}
            name={item.item}
            description={item.description}
            price={item.price}
            />)
        
    })

    function toggleModal(){
        setIsOpen(open => !open)
    }

    return (
        <div className="cart-page-container">
            <h2>{currentCartSingle.length ? 'Your Cart' : 'No Items In Cart'}</h2>
        {currentCartSingle}
        <div className="total">
            <button className="btn" onClick={toggleModal}>Check Out</button>
            <h3>Your Total: ${total.toFixed(2)}</h3>
        </div>
        <Modal 
        isOpen={isOpen} 
        total={total.toFixed(2)}
        closeModal={toggleModal}
        />
        </div>
    )
}