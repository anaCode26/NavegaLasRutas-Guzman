import {
	Button,
	Card,
	Image,
	Text,
	Heading,
	Stack,
	CardBody,
	CardFooter,
	Flex,
	Badge,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
	const pokemonId = prod?.id;
	if (!pokemonId) {
		return null;
	}
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
	return (
		<Card maxW="sm" background={"orange.100"}>
			<CardBody>
				<Flex justifyContent="center">
					<Image src={imageUrl} alt={prod.name} borderRadius="lg" />
				</Flex>
				<Stack mt="6" spacing="3">
					<Heading size="md" textAlign="center">
						{prod.name}
						{prod.types && (
							<Flex justifyContent={"center"} gap="2" m={6}>
								{prod.types.map((typeObj) => (
									<Badge
										key={typeObj.type.name}
										colorScheme="orange"
										textTransform="capitalize"
									>
										{typeObj.type.name}
									</Badge>
								))}
							</Flex>
						)}
					</Heading>
					<Text>Height: {prod.height / 10} m</Text>
					<Text>Weight: {prod.weight / 10} kg</Text>
				</Stack>
			</CardBody>
			<CardFooter gap="2" justifyContent="center">
				<Link to={`/product/${pokemonId}`}>
					<Button variant="solid" colorScheme="orange">
						See more
					</Button>
				</Link>
				<Button variant="solid" colorScheme="gray">
					Add to cart
				</Button>
			</CardFooter>
		</Card>
	);
};

export default Item;
