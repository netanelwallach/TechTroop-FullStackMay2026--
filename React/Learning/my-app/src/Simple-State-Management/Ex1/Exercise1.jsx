import React, { useReducer } from "react";

const initialCart = {
  items: [],
  total: 0,
  itemCount: 0,
};

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const newItem = { ...action.data, id: Date.now() };
      return {
        ...cart,
        items: [...cart.items, newItem],
        total: cart.total + newItem.price,
        itemCount: cart.itemCount + 1,
      };
    }
    case "REMOVE_ITEM": {
      const itemToRemove = cart.items.find((item) => item.id === action.data);

      // handle removing a non-existent item
      if (!itemToRemove) {
        return cart;
      }

      return {
        ...cart,
        items: cart.items.filter((item) => item.id !== action.data),
        total: cart.total - itemToRemove.price,
        itemCount: cart.itemCount - 1,
      };
    }
    case "CLEAR_CART": {
      return initialCart;
    }
    default:
      return cart;
  }
}

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
