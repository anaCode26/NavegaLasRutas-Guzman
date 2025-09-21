import {
	Box,
	Flex,
	HStack,
	Link,
	Image,
	IconButton,
	useDisclosure,
	Collapse,
	VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo2 from "/logo1.png";
import CartWidget from "./CartWidget";

const allLinks = [
	{ name: "Home", path: "/" },
	{ name: "Food", path: "/category/food" },
	{ name: "Toys", path: "/category/toys" },
	{ name: "Bed", path: "/category/bed" },
	{ name: "Clothes", path: "/category/clothes" },
];

const NavLink = ({ children, path }) => (
	<Link
		as={RouterLink}
		to={path}
		fontFamily={"Georgia"}
		fontSize={"18px"}
		px={4}
		_hover={{
			textDecoration: "none",
			textColor: "orange.600",
		}}
	>
		{children}
	</Link>
);

const Navbar = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box bg={"#ffffff"} borderBottom="1px" borderColor="orange.400" px={4}>
			<Flex alignItems="center" justifyContent="space-between">
				<Box>
					<Link as={RouterLink} to="/">
						<Image
							src={logo2}
							alt="Logo"
							height={{ base: "60px", lg: "100px" }}
							width="auto"
						/>
					</Link>
				</Box>

				<HStack
					as={"nav"}
					spacing={4}
					display={{ base: "none", md: "flex" }}
					flexGrow={1}
					justifyContent="center"
				>
					{allLinks.map((link) => (
						<NavLink key={link.name} path={link.path}>
							{link.name}
						</NavLink>
					))}
				</HStack>
				<VStack display={{ base: "none", md: "flex" }}>
					<CartWidget />
				</VStack>

				<Flex alignItems="center">
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant="ghost"
						aria-label="Navigation"
						display={{ md: "none" }}
					/>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<Box pb={4} display={{ md: "none" }} textAlign="center">
					<VStack as="nav" spacing={4}>
						{allLinks.map((link) => (
							<NavLink key={link.name} path={link.path}>
								{link.name}
							</NavLink>
						))}
						<CartWidget />
					</VStack>
				</Box>
			</Collapse>
		</Box>
	);
};

export default Navbar;
