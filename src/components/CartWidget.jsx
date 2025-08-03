import { IconButton, Badge, Box } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
	return (
		<Box position="relative" display="inline-block">
			<IconButton variant={"ghost"}>
				<ShoppingCart />
			</IconButton>
			<Badge
				colorScheme="red"
				borderRadius="full"
				px="2"
				position="absolute"
				top="-1"
				right="-1"
			>
				4
			</Badge>
		</Box>
	);
};

export default CartWidget;
