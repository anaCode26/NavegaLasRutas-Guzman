import { createContext, useState, useMemo, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = useCallback(
		(item, qty) => {
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
		},
		[cart],
	);

	const clear = useCallback(() => {
		setCart([]);
	}, []);

	const removeItem = useCallback(
		(id) => {
			setCart(cart.filter((prod) => prod.id !== id));
		},
		[cart],
	);

	const isInCart = useCallback(
		(id) => {
			return cart.some((prod) => prod.id === id);
		},
		[cart],
	);

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
