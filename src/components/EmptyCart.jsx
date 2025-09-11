import { Link as RouterLink } from "react-router-dom";

const EmptyCart = () => {
	return (
		<div>
			<h1>Your cart is empty!</h1>
			<RouterLink to="/">Go Home</RouterLink>;
		</div>
	);
};

export default EmptyCart;
