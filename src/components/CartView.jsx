import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
	const { cart, removeItem, clear } = useContext(CartContext);
	return (
		<>
			{/* Crear cart para carrito con
     nombre del producto
     precio,
     cantidad , precio final (cant por precio), y un boton que borre que usa la funcion RemoveItem(compra.id)
     mostrar un total a pagar (armar logica de total a pagar en context)
     un boton para vaciar carrito y otro para terminar compra */}
		</>
	);
};

export default CartView;
