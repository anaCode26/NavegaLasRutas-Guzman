const products = [
	{
		id: 1,
		name: "Alimento balanceado para perro adulto",
		description:
			"Alimento completo y balanceado para perros adultos de todas las razas.",
		productType: "food",
		image: "https://example.com/images/alimento-perro.jpg",
		price: 35.5,
	},
	{
		id: 2,
		name: "Juguete mordedor de cuerda",
		description:
			"Juguete de cuerda resistente, ideal para morder y tirar, promueve la limpieza dental.",
		productType: "toys",
		image: "https://example.com/images/juguete-cuerda.jpg",
		price: 12.75,
	},
	{
		id: 3,
		name: "Snacks de salmón para gato",
		description:
			"Deliciosos snacks de salmón real, ricos en omega-3 para un pelaje brillante.",
		productType: "brandFood",
		image: "https://example.com/images/snacks-gato.jpg",
		price: 18.0,
	},
	{
		id: 4,
		name: "Shampoo hipoalergénico para mascotas",
		description:
			"Shampoo suave y sin parabenos, formulado para pieles sensibles.",
		productType: "hygiene",
		image: "https://example.com/images/shampoo-mascota.jpg",
		price: 24.99,
	},
	{
		id: 5,
		name: "Cama ortopédica para perro",
		description:
			"Cama de espuma viscoelástica que alivia la presión en articulaciones, ideal para perros mayores.",
		productType: "accessories",
		image: "https://example.com/images/cama-perro.jpg",
		price: 75.0,
	},
	{
		id: 6,
		name: "Pelota de goma interactiva",
		description:
			"Pelota con dispensador de premios para estimular el juego y la inteligencia del perro.",
		productType: "toys",
		image: "https://example.com/images/pelota-interactiva.jpg",
		price: 29.5,
	},
	{
		id: 7,
		name: "Correa retráctil de 5 metros",
		description:
			"Correa retráctil resistente con mango ergonómico y sistema de bloqueo rápido.",
		productType: "accessories",
		image: "https://example.com/images/correa-perro.jpg",
		price: 40.0,
	},
	{
		id: 8,
		name: "Arena aglomerante para gatos",
		description:
			"Arena de arcilla de alto poder aglomerante, controla olores y es fácil de limpiar.",
		productType: "hygiene",
		image: "https://example.com/images/arena-gato.jpg",
		price: 15.99,
	},
	{
		id: 9,
		name: "Rascador para gatos con túnel",
		description:
			"Centro de juego y rascador con múltiples niveles y un túnel para esconderse.",
		productType: "toys",
		image: "https://example.com/images/rascador-gato.jpg",
		price: 55.75,
	},
	{
		id: 10,
		name: "Alimento húmedo para gato",
		description:
			"Pouch de atún y pollo en salsa, una opción nutritiva y sabrosa.",
		productType: "food",
		image: "https://example.com/images/alimento-humedo-gato.jpg",
		price: 2.5,
	},
	{
		id: 11,
		name: "Bebedero automático con filtro",
		description:
			"Fuente de agua que mantiene el agua fresca y purificada, incentivando la hidratación.",
		productType: "accessories",
		image: "https://example.com/images/bebedero-automatico.jpg",
		price: 65.0,
	},
	{
		id: 12,
		name: "Collar antipulgas para perro",
		description:
			"Collar que protege contra pulgas y garrapatas por hasta 8 meses.",
		productType: "hygiene",
		image: "https://example.com/images/collar-antipulgas.jpg",
		price: 38.99,
	},
	{
		id: 13,
		name: "Juego de inteligencia para perro",
		description:
			"Puzzle interactivo para perros que esconde premios y desafía su mente.",
		productType: "toys",
		image: "https://example.com/images/juego-inteligencia-perro.jpg",
		price: 45.0,
	},
	{
		id: 14,
		name: "Galletas de avena y arándanos",
		description:
			"Snacks naturales y saludables, perfectos como recompensa durante el entrenamiento.",
		productType: "brandFood",
		image: "https://example.com/images/galletas-perro.jpg",
		price: 14.5,
	},
	{
		id: 15,
		name: "Transportadora de viaje",
		description:
			"Jaula de transporte ligera y segura, con ventilación adecuada para viajes en coche o avión.",
		productType: "accessories",
		image: "https://example.com/images/transportadora.jpg",
		price: 90.0,
	},
	{
		id: 16,
		name: "Cortauñas para gatos",
		description:
			"Cortauñas con diseño ergonómico y luz LED para evitar cortar de más.",
		productType: "hygiene",
		image: "https://example.com/images/cortauñas-gato.jpg",
		price: 21.0,
	},
	{
		id: 17,
		name: "Jaula para hámster",
		description:
			"Jaula modular completa con rueda, bebedero y casita para hámsters.",
		productType: "accessories",
		image: "https://example.com/images/jaula-hamster.jpg",
		price: 55.0,
	},
	{
		id: 18,
		name: "Lecho de papel para roedores",
		description: "Lecho absorbente y ecológico, ideal para jaulas de roedores.",
		productType: "hygiene",
		image: "https://example.com/images/lecho-roedor.jpg",
		price: 19.99,
	},
	{
		id: 19,
		name: "Alimento para peces tropicales",
		description:
			"Alimento en escamas que realza los colores y no enturbia el agua del acuario.",
		productType: "food",
		image: "https://example.com/images/alimento-peces.jpg",
		price: 28.5,
	},
	{
		id: 20,
		name: "Filtro interno para acuario",
		description:
			"Filtro potente y silencioso para mantener el agua cristalina en acuarios pequeños.",
		productType: "accessories",
		image: "https://example.com/images/filtro-acuario.jpg",
		price: 49.0,
	},
	{
		id: 21,
		name: "Arnés ajustable para perro",
		description:
			"Arnés antitirones con tiras reflectantes, ideal para paseos nocturnos.",
		productType: "accessories",
		image: "https://example.com/images/arnes-perro.jpg",
		price: 32.0,
	},
	{
		id: 22,
		name: "Cepillo deslanador para perro",
		description:
			"Cepillo profesional para eliminar el pelo muerto y desenredar nudos.",
		productType: "hygiene",
		image: "https://example.com/images/cepillo-perro.jpg",
		price: 26.5,
	},
	{
		id: 23,
		name: "Peluche con sonido",
		description:
			"Juguete de peluche con chifle interno para atraer la atención del perro.",
		productType: "toys",
		image: "https://example.com/images/peluche-perro.jpg",
		price: 17.99,
	},
	{
		id: 24,
		name: "Spray repelente de orina",
		description:
			"Spray disuasorio que evita que las mascotas orinen en áreas no deseadas.",
		productType: "hygiene",
		image: "https://example.com/images/spray-repelente.jpg",
		price: 23.0,
	},
	{
		id: 25,
		name: "Alimento para conejos",
		description:
			"Pellets ricos en fibra con vitaminas y minerales para conejos jóvenes y adultos.",
		productType: "food",
		image: "https://example.com/images/alimento-conejo.jpg",
		price: 20.0,
	},
	{
		id: 26,
		name: "Juguete de plumas para gato",
		description:
			"Vara con plumas y cascabeles para estimular el instinto de caza del gato.",
		productType: "toys",
		image: "https://example.com/images/juguete-plumas.jpg",
		price: 11.5,
	},
	{
		id: 27,
		name: "Comedero doble de acero inoxidable",
		description:
			"Comedero de dos bowls, fácil de limpiar y resistente a la corrosión.",
		productType: "accessories",
		image: "https://example.com/images/comedero-doble.jpg",
		price: 30.0,
	},
	{
		id: 28,
		name: "Gotas para ojos de mascotas",
		description:
			"Gotas oftalmológicas para limpiar y aliviar los ojos irritados de perros y gatos.",
		productType: "hygiene",
		image: "https://example.com/images/gotas-ojos.jpg",
		price: 19.0,
	},
	{
		id: 29,
		name: "Alimento para cachorros",
		description:
			"Fórmula de alto valor energético y proteico para el crecimiento de cachorros.",
		productType: "food",
		image: "https://example.com/images/alimento-cachorro.jpg",
		price: 42.0,
	},
	{
		id: 30,
		name: "Juguete de goma para gatos",
		description:
			"Juguete pequeño de goma con catnip para atraer y entretener al gato.",
		productType: "toys",
		image: "https://example.com/images/juguete-goma-gato.jpg",
		price: 13.5,
	},
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};

export const getItem = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const item = products.find((prod) => prod.id === parseInt(id));
			if (item) {
				resolve(item);
			} else {
				reject(new Error("Product not found!"));
			}
		}, 2000);
	});
};

export const getProductsByType = (type) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const filteredProducts = products.filter(
				(prod) => prod.productType === type,
			);
			if (filteredProducts.length > 0) {
				resolve(filteredProducts);
			} else {
				reject(new Error(`No products found for type: ${type}`));
			}
		}, 2000);
	});
};
