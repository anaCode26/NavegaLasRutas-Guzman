import {
	Badge,
	Button,
	Card,
	CardBody,
	Heading,
	Image,
	Text,
	Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Loader from "../components/Loader";

const ItemDetail = ({ detail }) => {
	const { addItem } = useContext(CartContext);
	const [purchase, setPurchase] = useState(false);

	const onAdd = (quantity) => {
		console.log(quantity);
		setPurchase(true);
		addItem(detail, quantity);
	};

	if (!detail) {
		return <Loader />;
	}

	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			maxW="80%"
			mt={20}
			background={"#FFF3E8"}
		>
			<Image
				src={detail.image}
				alt={detail.title}
				boxSize={{ base: "200px", sm: "250px" }}
				borderRadius="lg"
				objectFit="cover"
				m={4}
			/>
			<Stack>
				<CardBody>
					<Heading size="md">{detail.title}</Heading>
					<Text mt={4} fontSize="sm">
						<Badge
							as="span"
							m={2}
							colorScheme={"purple"}
							textTransform="capitalize"
						>
							{detail.petType}
						</Badge>
						<Badge
							as="span"
							m={2}
							colorScheme={"blue"}
							textTransform="capitalize"
						>
							{detail.productType}
						</Badge>
					</Text>
					<Text>{detail.description}</Text>
					<Text fontSize={20} color={"red"} pt={4} fontWeight="semibold">
						$ {detail.price}
					</Text>
					<Text fontSize={20} color={"red"} pt={2} fontWeight="semibold">
						Stock : {detail.stock}
					</Text>
					{purchase ? (
						<Button
							ml={4}
							fontSize={14}
							as={RouterLink}
							to="/cart"
							colorScheme="orange"
						>
							Go to Cart
						</Button>
					) : (
						<ItemCount stock={detail.stock} onAdd={onAdd} />
					)}
				</CardBody>
			</Stack>
		</Card>
	);
};

export default ItemDetail;
