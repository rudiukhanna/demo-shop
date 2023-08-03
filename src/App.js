import Card from "./Card";
import { useState, useEffect } from "react";
import './styles/styles.css';
import Header from "./Header";

const URL = 'https://dummyjson.com/products';

function App() {

  const [products, setProducts] = useState([]);


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
                     />)}
              </div>
            </div>
         
        </div>
      </div>
    </div>
    </>
  );

}


export default App;
