import {
	Badge,
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Text,
	Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ detail }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	if (!detail) {
		return <Text>Loading...</Text>;
	}

	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detail.id}.png`;

	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			maxW="xl"
			width="100%"
			mt={20}
			background={"orange.100"}
		>
			<Image
				src={imageUrl}
				alt={detail.name}
				boxSize={{ base: "200px", sm: "250px" }}
				objectFit="cover"
				m={4}
			/>
			<Stack>
				<CardBody>
					<Heading size="md">{detail.name}</Heading>

					<Text mt={4} fontSize="sm">
						<Badge
							as="span"
							m={2}
							colorScheme={"purple"}
							textTransform="capitalize"
						>
							{detail.productType}
						</Badge>
					</Text>

					<Text>{detail.description}</Text>
				</CardBody>
				<CardFooter>
					<Button variant="solid" colorScheme="orange">
						Add to Cart
					</Button>
					<Button
						ml={4}
						variant="solid"
						colorScheme="gray"
						onClick={handleGoBack}
					>
						Go Back
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
};

export default ItemDetail;
