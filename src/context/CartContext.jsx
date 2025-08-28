import { useState } from "react";

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, qty) => {
		console.log(item, qty);
		setCart([...cart, { ...item, quantity: qty }]);
	};

	const clear = () => {
		setCart([]);
	};

	const removeItem = (id) => {
		setCart(cart.filter((prod) => prod.id !== id));
	};
	return (
		<CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
