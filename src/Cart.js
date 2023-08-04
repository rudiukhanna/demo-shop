import CartItem from './CartItem';

function Cart({cartItems, removeFromCart, clearCart}) {

    const getTotalPrice = () => {
        return cartItems.reduce((total, product) => total + product.price, 0);
      };

      return (
        <div>
          <h2>Кошик</h2>
          {cartItems.length === 0 ? (
            <p>Кошик пустий (0 грн)</p>
          ) : (
            <>
              {cartItems.map((product) => (
                <CartItem key={product.id} item={product} removeFromCart={removeFromCart} />
              ))}
              <p>Загальна вартість: {getTotalPrice()} $</p>
              <button onClick={clearCart}>Очистити</button>
            </>
          )}
        </div>
      );
    };
    
export default Cart;