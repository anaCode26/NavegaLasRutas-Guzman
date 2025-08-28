import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByType } from "../mock/AsyncMock";

const ItemListContainer = ({ mensaje }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { productType } = useParams();

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				let productsList;
				if (productType) {
					productsList = await getProductsByType(productType);
				} else {
					productsList = await getProducts();
				}
				setData(productsList);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [productType]);

	if (loading) {
		return <div>Cargando...</div>;
	}

	return (
		<div>
			<h1>
				{mensaje}{" "}
				{productType && (
					<span style={{ textTransform: "capitalize" }}>{productType}</span>
				)}
			</h1>
			<ItemList data={data} />
		</div>
	);
};
export default ItemListContainer;
