import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			console.log(item, quantity);
			setCart([...cart, { ...item, quantity: quantity }]);
		}
	};

	const clear = () => {
		setCart([]);
	};

	const removeItem = (id) => {
		setCart(cart.filter((prod) => prod.id !== id));
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const removeList = () => {};

	return (
		<CartContext.Provider
			value={{ cart, addItem, clear, removeItem, removeList, isInCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
