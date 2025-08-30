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
	Box,
	Circle,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
	return (
		<Card maxW="60" overflow="hidden" background={"#FFF3E8"}>
			<CardBody p={2}>
				<Flex justifyContent="center">
					<Box position="relative">
						<Image src={prod.image} alt={prod.title} borderRadius="lg" />
						{prod.hasDiscount && (
							<Circle
								size="12"
								bg="red"
								color="white"
								position="absolute"
								top="2"
								right="2"
								transform="translate(25%, -25%)"
								zIndex="1"
								fontWeight="bold"
							>
								30%
							</Circle>
						)}
					</Box>
				</Flex>
				<Stack mt="6" spacing="3">
					<Heading size="md" textAlign="center" noOfLines={2}>
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
					<Flex justifyContent={"center"}>
						<Text fontSize={20} color={"red"} fontWeight="semibold">
							$ {prod.price}
						</Text>
					</Flex>
				</Stack>
			</CardBody>
			<CardFooter justifyContent="center">
				<Link to={`/item/${prod.id}`}>
					<Button variant="solid" colorScheme="orange" fontSize={14}>
						See more
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};

export default Item;
