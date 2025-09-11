import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Badge } from "@chakra-ui/react";

const CartWIdgetIcons = () => {
	const { cart, cartQuantity } = useContext(CartContext);
	console.log(cart);
	return (
		<Badge
			colorScheme="red"
			borderRadius="full"
			px="2"
			position="absolute"
			top="-1"
			right="-1"
			background="orange.200"
		>
			{cartQuantity()}
		</Badge>
	);
};

export default CartWIdgetIcons;
