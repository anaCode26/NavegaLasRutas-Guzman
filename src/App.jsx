import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar /> <h1>Pet Planet</h1>
				<Routes>
					<Route path="/" element="Hola desde Home." />
					<Route path="/about" element="Hola desde About." />
					<Route
						path="/products"
						element={<ItemListContainer mensaje="Hola desde products." />}
					/>{" "}
					<Route path="/contact" element="Hola desde Contact." />
					<Route path="*" element={<h2>Not Found</h2>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
