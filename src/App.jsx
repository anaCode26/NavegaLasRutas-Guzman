import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar /> <h1>Pet Planet</h1>
			<ItemListContainer mensaje="Aqui no hay nada todavia." />
		</>
	);
}

export default App;
