import {
	Box,
	Flex,
	HStack,
	Link,
	Image,
	IconButton,
	useDisclosure,
	Collapse,
	Button,
	VStack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import logo2 from "/logo1.png";
import CartWidget from "./CartWidget";

const links = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Products", path: "/products" },
	{ name: "Contact", path: "/contact" },
];

const productTypes = ["food", "toys", "bed", "clothes"];

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
					{links.map((link) => {
						if (link.name === "Products") {
							return (
								<Menu key={link.name}>
									<MenuButton
										as={Button}
										rightIcon={<ChevronDownIcon />}
										variant="ghost"
										fontFamily={"Georgia"}
										fontSize={"18px"}
										px={4}
										_hover={{
											textDecoration: "none",
											textColor: "orange.600",
										}}
									>
										{link.name}
									</MenuButton>
									<MenuList zIndex={10}>
										{productTypes.map((type) => (
											<MenuItem
												as={RouterLink}
												to={`/category/${type}`}
												key={type}
											>
												{type.charAt(0).toUpperCase() + type.slice(1)}
											</MenuItem>
										))}
									</MenuList>
								</Menu>
							);
						}
						return (
							<NavLink key={link.name} path={link.path}>
								{link.name}
							</NavLink>
						);
					})}
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
					<HStack as="nav" spacing={4} flexDirection="column">
						{links.map((link) => {
							if (link.name === "Products") {
								return (
									<Menu key={link.name}>
										<MenuButton
											as={Button}
											rightIcon={<ChevronDownIcon />}
											variant="ghost"
											fontFamily={"Georgia"}
											fontSize={"18px"}
										>
											{link.name}
										</MenuButton>
										<MenuList zIndex={10}>
											{productTypes.map((type) => (
												<MenuItem
													as={RouterLink}
													to={`/category/${type}`}
													key={type}
												>
													{type.charAt(0).toUpperCase() + type.slice(1)}
												</MenuItem>
											))}
										</MenuList>
									</Menu>
								);
							}
							return (
								<NavLink key={link.name} path={link.path}>
									{link.name}
								</NavLink>
							);
						})}

						<Button variant="ghost" as={Link} href="#" mt={2}>
							<CartWidget />
						</Button>
					</HStack>
				</Box>
			</Collapse>
		</Box>
	);
};

export default Navbar;
