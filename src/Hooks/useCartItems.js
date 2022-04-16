import { useState } from "react";

const useCartItems = () => {
  const [cartItems, setCartItems] = useState([]);
  return [cartItems, setCartItems];
};

export default useCartItems;
