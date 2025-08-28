import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByType, getItem } from "../mock/AsyncMock";

const ItemListContainer = ({ mensaje }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { type } = useParams();

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				let pokemonBaseList;
				if (type) {
					const typeData = await getProductsByType(type);
					pokemonBaseList = typeData.slice(0, 20);
				} else {
					const allData = await getProducts();
					pokemonBaseList = allData;
				}

				const fullPokemonDataPromises = pokemonBaseList.map(async (pokemon) => {
					const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
					const fullData = await getItem(pokemonId);
					return fullData;
				});

				const fullPokemonList = await Promise.all(fullPokemonDataPromises);
				setData(fullPokemonList);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [type]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>
				{mensaje}{" "}
				{type && <span style={{ textTransform: "capitalize" }}>{type}</span>}
			</h1>
			<ItemList data={data} />
		</div>
	);
};
export default ItemListContainer;
