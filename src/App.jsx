import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorComponent from "./components/ErrorComponent";
import { CartProvider } from "./context/CartContext";

function App() {
	return (
		<>
			<BrowserRouter>
				<CartProvider>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer />} />
						<Route path="/about" element="Hola desde About." />
						<Route path="/products" element={<ItemListContainer />} />
						<Route
							path="/category/:productType"
							element={<ItemListContainer />}
						/>
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/contact" element="Hola desde Contact." />
						<Route path="*" element={<ErrorComponent />} />
					</Routes>
				</CartProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
