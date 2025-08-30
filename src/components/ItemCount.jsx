import { Button } from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
	const [count, setCount] = useState(1);

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
		<div>
			<Button onClick={increment}>+</Button>
			<span>{count}</span>
			<Button onClick={decrement}>-</Button>
			<Button onClick={() => onAdd(count)}>Buy Product</Button>
		</div>
	);
};

export default ItemCount;
