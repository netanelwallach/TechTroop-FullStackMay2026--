export const initialCart = {
  items: [],
  total: 0,
  itemCount: 0,
};

export function cartReducer(cart, action) {
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
