import { useContext } from "react";
import {
	Badge,
	Box,
	Button,
	Card,
	HStack,
	Image,
	Flex,
	Divider,
	Stack,
	Heading,
	Text,
	CardBody,
	CardFooter,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartView = () => {
	const { cart, removeItem, clear, total } = useContext(CartContext);
	const cartTotal = total();

	return (
		<Box p={4}>
			<Flex direction="column" gap={6}>
				{cart.map((product) => (
					<Card
						direction={{ base: "column", sm: "row" }}
						overflow="hidden"
						w="800px"
						mx={"auto"}
						background={"#FFF3E8"}
						boxShadow="md"
						p={4}
						key={product.id}
					>
						<Flex justifyContent="space-between" w="100%">
							<Image
								src={product.image}
								alt={product.title}
								objectFit="cover"
								boxSize={{ base: "100px", md: "150px" }}
								borderRadius="lg"
							/>
							<CardBody>
								<Heading size="md" mb="2">
									{product.title}
								</Heading>
								<Text py="2">Cantidad: {product.quantity}</Text>
								<Text color="blue.600" fontSize="lg" fontWeight="semibold">
									$ {product.price} c/u
								</Text>
							</CardBody>
							<Box alignSelf="end">
								<Button
									colorScheme="red"
									onClick={() => removeItem(product.id)}
								>
									Eliminar
								</Button>
							</Box>
						</Flex>
					</Card>
				))}
			</Flex>
			<Divider my={8} />
			<Box textAlign="center">
				<Heading size="md" mb={4}>
					Total a Pagar: $ {cartTotal}
				</Heading>
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justifyContent="center"
				>
					<Button colorScheme="orange" onClick={clear}>
						Vaciar Carrito
					</Button>
					<Button colorScheme="teal" as={RouterLink} to="/checkout">
						Terminar Compra
					</Button>
				</Stack>
			</Box>
		</Box>
	);
};

export default CartView;
