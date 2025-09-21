import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";
import CartView from "./CartView";
import CheckoutForm from "./CheckoutForm";
import OrderConfirmation from "./OrderConfirmation";
import { Flex } from "@chakra-ui/react";

const CartContainer = () => {
	const { cart } = useContext(CartContext);
	const [orderId, setOrderId] = useState(null);
	const [showCheckout, setShowCheckout] = useState(false);

	if (orderId) {
		return <OrderConfirmation orderId={orderId} />;
	}

	if (cart.length === 0) {
		return <EmptyCart />;
	}

	if (showCheckout) {
		return (
			<Flex minW={"60%"} align="center" justify="center" p={4}>
				<CheckoutForm setOrderId={setOrderId} />
			</Flex>
		);
	}

	return <CartView onBuy={() => setShowCheckout(true)} />;
};

export default CartContainer;
