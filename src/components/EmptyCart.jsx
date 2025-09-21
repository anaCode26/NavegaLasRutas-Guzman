import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import { LuShoppingCart } from "react-icons/lu";

const EmptyCart = () => {
	return (
		<Box textAlign="center" py={10} px={6}>
			<VStack spacing={4}>
				<LuShoppingCart size="50px" color="gray" />
				<Heading size="md" color="gray.600">
					Your cart is empty
				</Heading>
				<Text color="gray.500">
					Explore our products and add items to your cart
				</Text>
			</VStack>
		</Box>
	);
};

export default EmptyCart;
