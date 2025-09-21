import { IconButton, Box } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import CartWidgetIcons from "./CartWidgetIcons";

const CartWidget = () => {
	return (
		<Box position="relative" display="inline-block">
			<IconButton as={RouterLink} to="/cart" variant="ghost">
				<ShoppingCart />
			</IconButton>
			<CartWidgetIcons />
		</Box>
	);
};

export default CartWidget;
