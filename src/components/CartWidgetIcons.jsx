import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Badge } from "@chakra-ui/react";

const CartWIdgetIcons = () => {
	const { cart } = useContext(CartContext);
	console.log(cart);
	return <Badge />;
};

export default CartWIdgetIcons;
