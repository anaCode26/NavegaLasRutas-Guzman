import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ mensaje }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((response) => response.json())
			.then((data) => {
				console.log(data.results);
				setData(data.results);
			})
			.catch((error) => console.error("Error al obtener los datos:", error));
	}, []);

	return (
		<div>
			<span>{mensaje}</span>
			<ItemList data={data} />
		</div>
	);
};
export default ItemListContainer;
