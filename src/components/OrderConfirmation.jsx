import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	Box,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";

const OrderConfirmation = ({ orderId }) => {
	const navigate = useNavigate();
	const { clear } = useContext(CartContext);

	useEffect(() => {
		clear();

		const timer = setTimeout(() => {
			navigate("/");
		}, 5000);

		return () => clearTimeout(timer);
	}, [clear, navigate]);

	return (
		<Box p={4} maxW="md" mx="auto" mt={10}>
			<Alert
				status="success"
				variant="subtle"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				borderRadius="lg"
				p={8}
			>
				<AlertIcon boxSize="40px" mr={0} />
				<AlertTitle mt={4} mb={1} fontSize="lg">
					¡Compra Exitosa! 🎉
				</AlertTitle>
				<AlertDescription maxWidth="sm">
					Tu número de orden es: <br />
					<Box as="span" fontWeight="bold" fontSize="md">
						{orderId}
					</Box>
					<br />
					Redireccionando a la página principal en 5 segundos...
				</AlertDescription>
				<CloseButton
					position="absolute"
					right="8px"
					top="8px"
					onClick={() => navigate("/")}
				/>
			</Alert>
		</Box>
	);
};

export default OrderConfirmation;
