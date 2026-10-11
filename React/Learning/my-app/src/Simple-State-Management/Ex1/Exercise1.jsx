import { useState } from "react";
import { useReducer } from "react";

function ShoppingCart() {
  // const [items, setItems] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [itemCount, setItemCount] = useState(0);

  const initialState = {
    items: [],
    total: 0,
    itemCount: 0,
  };

  // const addItem = (product) => {
  //   const newItems = [...items, { ...product, id: Date.now() }];
  //   setItems(newItems);
  //   setTotal(total + product.price);
  //   setItemCount(itemCount + 1);
  // };

  // const removeItem = (id) => {
  //   const newItems = items.filter((item) => item.id !== id);
  //   const removedItem = items.find((item) => item.id === id);
  //   setItems(newItems);
  //   setTotal(total - removedItem.price);
  //   setItemCount(itemCount - 1);
  // };

  return (
    <div>
      <h2>
        Shopping Cart ({itemCount} items) - Total: ${total}
      </h2>
      {/* Render items */}
    </div>
  );
}

function cartReducer(items, action) {
  switch (action.type) {
    case "ADD": {
      const newItem = action.data;
      const updatedItems = [...items, newItem];
      return {updatedItems, total + newItem.price, itemCount + 1};
      break;
    }
    case "REMOVE": {
      const id = action.data;
      const targetItem = items.find(item => item.id === itemId);
      const updatedItems = items.filter((item) => item.id !== id);
      return {updatedItems, total - targetItem.price, itemCount - 1};
      break;
    }
    default:
      return items; // Also throwing an error is an option
  }
}

export default ShoppingCart;
