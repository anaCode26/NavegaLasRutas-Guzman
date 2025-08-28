export const getProducts = async () => {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};

export const getItem = async (id) => {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		if (!response.ok) {
			throw new Error("Pokemon not found!");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching item:", error);
		throw error;
	}
};

export const getProductsByType = async (type) => {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
		if (!response.ok) {
			throw new Error(`Type ${type} not found!`);
		}
		const data = await response.json();

		const pokemonList = data.pokemon.map((p) => p.pokemon).slice(0, 20);

		return pokemonList;
	} catch (error) {
		console.error("Error fetching products by type:", error);
		throw error;
	}
};
