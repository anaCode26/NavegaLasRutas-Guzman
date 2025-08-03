import {
	Box,
	Flex,
	Link,
	Button,
	HStack,
	useDisclosure,
	Stack,
	Collapse,
	Image,
} from "@chakra-ui/react";

import { X, Menu, ShoppingCart } from "lucide-react";
import logo2 from "../assets/logo2.png";

const links = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Services", path: "/services" },
	{ name: "Contact", path: "/contact" },
];

const NavLink = ({ children, path }) => (
	<Link
		px={4}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: "gray.200",
		}}
		href={path}
	>
		{children}
	</Link>
);

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const iconSize = "24px";

	return (
		<Box bg={"#ffffff"} borderBottom="1px" borderColor="gray.100">
			{" "}
			<Flex alignItems={"center"} justifyContent={"space-between"}>
				<Button
					onClick={isOpen ? onClose : onOpen}
					aria-label={isOpen ? "Close menu" : "Open menu"}
					display={{ base: "flex", md: "none" }}
					p={2}
					borderRadius="md"
				>
					{isOpen ? <X size={iconSize} /> : <Menu size={iconSize} />}
				</Button>

				<HStack spacing={8} alignItems={"center"}>
					<Box>
						<Link href="/">
							<Image
								src={logo2}
								alt="Your Company Logo"
								height={{ base: "40px", md: "60px" }}
								width="auto"
							/>
						</Link>
					</Box>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{links.map((link) => (
							<NavLink key={link.name} path={link.path}>
								{link.name}
							</NavLink>
						))}
					</HStack>
				</HStack>

				<Flex alignItems={"center"}>
					<Button
						onClick={() => {}}
						aria-label="View Cart or Schedule"
						variant="ghost"
						p={2}
					>
						<ShoppingCart size={iconSize} />
						{/* If you had a state, e.g., showCartIcon:
                        {showCartIcon ? <ShoppingCart size={iconSize} /> : <CalendarDays size={iconSize} />}
                        */}
					</Button>
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<Box pb={4} display={{ md: "none" }}>
					{" "}
					<Stack as={"nav"} spacing={4}>
						{links.map((link) => (
							<NavLink key={link.name} path={link.path}>
								{link.name}
							</NavLink>
						))}
					</Stack>
				</Box>
			</Collapse>
		</Box>
	);
};

export default Navbar;
