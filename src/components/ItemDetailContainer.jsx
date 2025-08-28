import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { getItem } from "../mock/AsyncMock";

const ItemDetailContainer = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState(null);

	useEffect(() => {
		getItem(id)
			.then((data) => {
				setDetail(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [id]);

	return (
		<Flex alignItems="center" justifyContent="center">
			<ItemDetail detail={detail} />
		</Flex>
	);
};

export default ItemDetailContainer;
