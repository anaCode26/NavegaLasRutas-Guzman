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
	return (
		<Card maxW="60" background={"#FFF3E8"}>
			<CardBody gap={2}>
				<Flex justifyContent="center">
					<Image src={prod.image} alt={prod.title} borderRadius="lg" />
				</Flex>
				<Stack mt="6" spacing="3">
					<Heading size="md" textAlign="center" noOfLines={1}>
						{prod.title}
					</Heading>
					<Flex justifyContent={"center"} gap="2" pt={2}>
						<Badge colorScheme="blue" textTransform="capitalize">
							{prod.petType}
						</Badge>
						<Badge colorScheme="purple" textTransform="capitalize">
							{prod.productType}
						</Badge>
					</Flex>
					<Text noOfLines={3}>{prod.description}</Text>
					<Flex justifyContent={"center"} pt={2}>
						<Text fontSize={20} color={"red"} fontWeight="semibold">
							$ {prod.price}
						</Text>
					</Flex>
				</Stack>
			</CardBody>
			<CardFooter gap="2" justifyContent="center">
				<Link to={`/item/${prod.id}`}>
					<Button variant="solid" colorScheme="orange" fontSize={14}>
						See more
					</Button>
				</Link>
				<Button variant="solid" colorScheme="gray" fontSize={14}>
					Add to cart
				</Button>
			</CardFooter>
		</Card>
	);
};

export default Item;
