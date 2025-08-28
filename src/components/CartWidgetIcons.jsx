import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWIdgetIcons = () => {
	const cart = useContext(CartContext);
	console.log(cart);
	return <Bagde></Bagde>;
};

export default CartWIdgetIcons;
