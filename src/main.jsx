import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

const customTheme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	fonts: {
		heading: "sans-serif",
		body: "sans-serif",
	},
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
		<ChakraProvider theme={customTheme}>
			<App />
		</ChakraProvider>
	</StrictMode>,
);
