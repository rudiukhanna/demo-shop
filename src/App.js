import Card from "./Card";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import './styles/styles.css';
import Header from "./Header";

const URL = 'https://dummyjson.com/products';

function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter(product => item.id !== product.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };


  useEffect(() => {
    fetch(URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      setProducts(data.products);
    })
  }, [])

  return (
    <>
    <Header/>
    <div className="product-app">
      <div className="row">
        <div className="products col-md-8 col-lg-9">
            <div className="container">
              <div className="grid">
                {products.map((product) => 
                <Card 
                     key={product.id} {...product}
                     products={products}
                     id={product.id}
                     addToCart={addToCart}
                     />)}
              </div>
            </div>
         
        </div>
      </div>
    </div>

    <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
    </>
  );

}


export default App;
