import { createContext, useContext, useReducer, useEffect } from 'react';

// Function to get cart data from local storage
const getLocalStorageCart = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : { items: [] };
};

// Initial state for the cart
const initialState = getLocalStorageCart();

// Actions for updating the cart
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = {
        ...state,
        items: [...state.items, action.payload],
      };
      // Update local storage whenever the cart changes
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    // Add more cases for updating the cart as needed
    default:
      return state;
  }
};

// Create the Cart context
const CartContext = createContext();

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // Update local storage whenever the cart changes
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing the cart context
export const useCart = () => {
  return useContext(CartContext);
};
