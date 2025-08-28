import { Center, Heading, VStack, Image } from "@chakra-ui/react";

const ErrorComponent = () => {
	return (
		<Center h="100vh">
			<VStack spacing={4}>
				<Image
					src="https://media.giphy.com/media/A9lguybVzlkXTzfwxK/giphy.gif"
					alt="404 Not Found"
					boxSize="300px"
					objectFit="cover"
				/>
				<Heading as="h1" size="2xl">
					404 - Not Found
				</Heading>
			</VStack>
		</Center>
	);
};

export default ErrorComponent;
