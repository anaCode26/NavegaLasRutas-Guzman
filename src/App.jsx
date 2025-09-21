import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorComponent from "./components/ErrorComponent";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";

function MainAppContent() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/products" element={<ItemListContainer />} />
				<Route path="/cart" element={<CartContainer />} />
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
