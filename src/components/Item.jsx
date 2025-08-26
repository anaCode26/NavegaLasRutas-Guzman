import {
	Button,
	Card,
	Image,
	Text,
	Heading,
	Stack,
	CardBody,
	CardFooter,
} from "@chakra-ui/react";

const Item = ({ prod }) => {
	const pokemonId = prod.url.split("/").filter(Boolean).pop();
	const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

	return (
		<Card maxW="sm">
			<CardBody>
				<Image src={imageUrl} alt={prod.name} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{prod.name}</Heading>
					<Text>This is a pokemon {prod.name}.</Text>
				</Stack>
			</CardBody>
			<CardFooter gap="2">
				<Button variant="solid" colorScheme="blue">
					See more
				</Button>
				<Button variant="ghost">Add to cart</Button>
			</CardFooter>
		</Card>
	);
};

export default Item;
