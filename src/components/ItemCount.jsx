import { Button, HStack, Box } from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
	const [count, setCount] = useState(0);

	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<HStack maxW="320px" mx="auto" mt={4} spacing={4}>
			<Button
				onClick={decrement}
				isDisabled={count === 0}
				size="sm"
				fontFamily="Georgia"
			>
				-
			</Button>
			<Box textAlign="center" fontSize="lg" minW="3ch">
				{count}
			</Box>
			<Button onClick={increment} isDisabled={count >= stock} size="sm">
				+
			</Button>
			<Button
				colorScheme="teal"
				onClick={() => onAdd(count)}
				disabled={count === 0 || stock === 0}
			>
				Add to Cart
			</Button>
		</HStack>
	);
};

export default ItemCount;
