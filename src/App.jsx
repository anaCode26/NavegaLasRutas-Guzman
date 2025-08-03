import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";

function App() {
	return (
		<>
			<Navbar /> <h1>Hola</h1>
			<ItemListContainer mensaje={"Aqui no hay nada todavia."} />
		</>
	);
}

export default App;
