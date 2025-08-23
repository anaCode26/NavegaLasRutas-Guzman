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
					<Route
						path="/"
						element={<ItemListContainer mensaje="Aqui no hay nada todavia." />}
					/>
					{/* <Route path="/item" element={<ItemDetailContainer />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
