import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore"; // Importa 'doc' y 'getDoc' de Firestore
import { db } from "../service/firebase"; // Importa 'db' desde tu archivo de servicio
import Loader from "../components/Loader";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState(null);
	const [loader, setLoader] = useState(false);
	const [invalid, setInvalid] = useState(null);

	useEffect(() => {
		setLoader(true);
		const docRef = doc(db, "products", id);
		getDoc(docRef)
			.then((res) => {
				if (res.data()) {
					setDetail({ id: res.id, ...res.data() });
				} else {
					setInvalid(true);
				}
			})
			.catch((error) => console.log(error))
			.finally(() => setLoader(false));
	}, [id]);

	if (invalid) {
		return (
			<div>
				<h1>El producto no existe</h1>
				<Link to="/">Ir a home</Link>
			</div>
		);
	}

	return (
		<Flex alignItems="center" justifyContent="center">
			{loader ? (
				<>
					<Loader />
				</>
			) : (
				<ItemDetail detail={detail} />
			)}
		</Flex>
	);
};

export default ItemDetailContainer;
