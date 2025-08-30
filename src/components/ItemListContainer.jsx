import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByType } from "../mock/AsyncMock";
import Loader from "./Loader";

const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(true);
	const { productType } = useParams();

	useEffect(() => {
		setLoader(true);

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
				setLoader(false);
			}
		};

		fetchData();
	}, [productType]);

	return (
		<>
			{loader ? (
				<Loader />
			) : (
				<div>
					<ItemList data={data} />
				</div>
			)}
		</>
	);
};
export default ItemListContainer;
