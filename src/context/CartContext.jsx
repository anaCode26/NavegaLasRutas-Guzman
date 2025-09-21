import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, qty) => {
		if (isInCart(item.id)) {
			const cartUpdated = cart.map((prod) => {
				if (item.id === prod.id) {
					return { ...prod, quantity: prod.quantity + qty };
				} else {
					return prod;
				}
			});
			setCart(cartUpdated);
		} else {
			setCart([...cart, { ...item, quantity: qty }]);
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

	const cartQuantity = useMemo(() => {
		return cart.reduce((acc, prod) => acc + prod.quantity, 0);
	}, [cart]);

	const total = useMemo(() => {
		return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
	}, [cart]);

	return (
		<CartContext.Provider
			value={{ cart, addItem, clear, removeItem, cartQuantity, total }}
		>
			{children}
		</CartContext.Provider>
	);
};
