import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

export default function Nav() {
    const cartContext = useContext(CartContext)
    const total = cartContext.numItems

    return (
        <header>
            <nav className="nav-container">
                <ul className="nav-container-left">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                </ul>
                <ul className="nav-container-right">
                    <li>
                        <Link className="cart-link" to="/shop/cart">Cart {total > 0 ? <span className="cart-number">{total}</span> : ''}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}