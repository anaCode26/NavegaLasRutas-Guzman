import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
	return (
		<Flex justifyContent={"center"} p={40}>
			<Spinner p={20} color="orange" size="xl" />
		</Flex>
	);
};

export default Loader;
