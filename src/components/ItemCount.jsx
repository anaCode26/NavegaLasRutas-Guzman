import { Button } from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = ({ stock }) => {
	const [count, setCount] = useState(1);

	const increment = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<Button onClick={increment}>+</Button>
			<span>{count}</span>
			<Button onClick={decrement}>-</Button>
			<Button>Buy Product</Button>
		</div>
	);
};

export default ItemCount;
