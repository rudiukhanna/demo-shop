function CartItem({ product, removeFromCart }) {
    return (
        <div>
          <h3>{product.title}</h3>
          <p>Ціна: {product.price} грн</p>
          <button onClick={() => removeFromCart(product)}>Видалити</button>
        </div>
      );
};

export default CartItem;