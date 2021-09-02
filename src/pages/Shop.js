import React from 'react'
import Item from '../components/Item'

import {products} from '../products'



export default function Shop(){
    const items = products.map(item => (
        <Item 
        key={item.id}
        id={item.id}
        img={item.img}
        name={item.item}
        description={item.description}
        price={item.price}
        />
    ))

    
    return (
        <>
        <section className="shop-header">
            <h1>Products</h1>
        </section>
        
        <div className="shop-page-container">
        {items}
        </div>
        
        </>
    )
}