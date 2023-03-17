import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
