import './App.css';
import {useEffect, useState} from 'react'
import { Route, Switch } from 'react-router';
import { products } from './products';

import Home from './pages/Home'
import Nav from './components/Nav';
import Shop from './pages/Shop';
import CartContext from './context/CartContext';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([])
  const [numItems, setNumItems] = useState(0)

  useEffect(()=> {
    updateCount()
  },[cartItems])

  function updateCount(){
    const total = cartItems.reduce((prev, item) => {
      return prev + item.count
  }, 0)
  setNumItems(total)
  }

  function changeItemCount(event) {
    const newItem = products.find(item => item.id === event.target.id)
    if(newItem.count !== 0){
      if(event.target.textContent === '-'){
        newItem.count = newItem.count - 1;
        //if the count gets to zero remove the item completely from cart
        if (newItem.count === 0){
         
          const stillInCart = cartItems.filter(item => item.count !== 0)

          setCartItems([
            ...stillInCart
          ])
          return
        }
      } else if(event.target.textContent === '+') {
        newItem.count = newItem.count + 1;
      }
      setCartItems([ ...cartItems ])
    }     
  }

  function addToCart(event) {
      const newItem = products.find(item => item.id === event.target.id)
      newItem.count = newItem.count + 1;
      //check if item is already in the cart, if it is just update the count and dont add a new item to the array
      const shouldAdd = cartItems.find(item => item.id === newItem.id) ? false : true;
      if(shouldAdd){
        setCartItems([
          ...cartItems,
                newItem
        ])
      } else {
        setCartItems([...cartItems])
      }
  }

  function deleteFromCart(event){
    const newItems = cartItems.filter(item => item.id !== event.target.id)
    const oldItems = cartItems.filter(item => item.id === event.target.id)
    oldItems.forEach(item => item.count = 0)
    setCartItems(newItems)
  }

  const cartSettings = {
    addToCart,
    deleteFromCart,
    changeItemCount,
    numItems,
    cartItems
  }

  return (
    <CartContext.Provider value={cartSettings}>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/shop">
          <Shop/>
        </Route>
        <Route path="/shop/cart">
          <Cart/>
        </Route>
      </Switch>
    </div>
    </CartContext.Provider>
  );
}

export default App;
