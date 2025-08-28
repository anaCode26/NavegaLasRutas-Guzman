import { Flex } from "@chakra-ui/react";
import Item from "./Item";

const ItemList = ({ data }) => {
	return (
		<Flex gap="8" p={6} justifyContent={"center"} wrap="wrap">
			{data.map((prod, index) => (
				<Item key={index} prod={prod} />
			))}
		</Flex>
	);
};

export default ItemList;
