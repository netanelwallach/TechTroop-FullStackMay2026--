import React, { useReducer } from "react";
import { initialCart, cartReducer } from "./cartReducer";

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", data: product });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", data: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h2>
        Shopping Cart ({cart.itemCount} items) - Total: ${cart.total}
      </h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {cart.items.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
}

export default ShoppingCart;
