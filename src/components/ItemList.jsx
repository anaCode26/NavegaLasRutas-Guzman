import { Flex } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ data }) => {
	return (
		<Flex gap="4" wrap="wrap">
			{data.map((prod, index) => (
				<Item key={index} prod={prod} />
			))}
		</Flex>
	);
};

export default ItemList;
