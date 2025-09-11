import { IconButton, Box } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import CartWidgetIcons from "./CartWidgetIcons";

const CartWidget = () => {
	return (
		<Box position="relative" display="inline-block">
			<IconButton variant="ghost">
				<ShoppingCart />
			</IconButton>
			<CartWidgetIcons />
		</Box>
	);
};

export default CartWidget;
