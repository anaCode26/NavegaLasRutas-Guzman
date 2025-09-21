import "./App.css";
import { Button } from "@chakra-ui/react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {
	BrowserRouter,
	Routes,
	Route,
	Link as RouterLink,
	useLocation,
} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorComponent from "./components/ErrorComponent";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";

function MainAppContent() {
	const location = useLocation();

	return (
		<>
			<NavBar />
			{location.pathname !== "/" && (
				<Button
					as={RouterLink}
					to="/"
					ml={4}
					mt={4}
					variant="solid"
					colorScheme="gray"
					fontSize={14}
				>
					Go Home
				</Button>
			)}
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/products" element={<ItemListContainer />} />
				<Route path="/cart" element={<CartContainer />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/category/:productType" element={<ItemListContainer />} />
				<Route path="/item/:id" element={<ItemDetailContainer />} />
				<Route path="*" element={<ErrorComponent />} />
			</Routes>
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<MainAppContent />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
