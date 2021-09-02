import React, { useEffect } from 'react'

import image from '../assets/store.jpg'

export default function Home(){
    const divRef = React.createRef()

    useEffect(()=> {
        const div = divRef.current
        setTimeout(() => {
            div.classList.add('fade-in')
        }, 100);
    })

    return (
        <>
        <section className="shop-header">
            <h1>Goodstuffs</h1>
        </section>
        
        <div ref={divRef} className="home-page-container">
            <h2>Top quality products for busy people.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <img style={{width: "500px"}} src={image} alt="storefront sign flipped to open"/>
        </div>
        </>
    )
}