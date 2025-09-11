import { Button } from "@chakra-ui/react";
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
		<div>
			<Button onClick={decrement}>-</Button>
			<span>{count}</span>
			<Button onClick={increment}>+</Button>
			<Button
				onClick={() => onAdd(count)}
				disabled={stock === 0 || count === 0}
			>
				Buy Product
			</Button>
		</div>
	);
};

export default ItemCount;
