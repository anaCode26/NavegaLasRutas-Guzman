import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(false);
	const { productType } = useParams();

	useEffect(() => {
		setLoader(true);

		const productsCollection = productType
			? query(
					collection(db, "products"),
					where("productType", "==", productType),
			  )
			: collection(db, "products");

		getDocs(productsCollection)
			.then((res) => {
				const list = res.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				});
				setData(list);
			})
			.catch((error) => console.error(error))
			.finally(() => setLoader(false));
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
