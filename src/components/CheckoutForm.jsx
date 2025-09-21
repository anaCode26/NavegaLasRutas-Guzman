"use client";

import { useContext } from "react";
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Stack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

const CheckoutForm = ({ setOrderId }) => {
	const { cart, clear } = useContext(CartContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		const db = getFirestore();
		const order = {
			buyer: data,
			items: cart.map((item) => ({
				id: item.id,
				title: item.title,
				price: item.price,
				quantity: item.quantity,
			})),
			total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
			date: new Date(),
		};

		addDoc(collection(db, "orders"), order)
			.then(({ id }) => {
				setOrderId(id);
				clear();
			})
			.catch((error) => {
				console.error("Error al crear la orden:", error);
			});
	});

	return (
		<form onSubmit={onSubmit}>
			<Stack gap="4" p="2">
				<FormControl isInvalid={!!errors.email}>
					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						{...register("email", { required: "El email es requerido" })}
					/>
					<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.name}>
					<FormLabel>Name</FormLabel>
					<Input
						type="text"
						{...register("name", { required: "El nombre es requerido" })}
					/>
					<FormErrorMessage>{errors.name?.message}</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.address}>
					<FormLabel>Address</FormLabel>
					<Input
						type="text"
						{...register("address", { required: "La dirección es requerida" })}
					/>
					<FormErrorMessage>{errors.address?.message}</FormErrorMessage>
				</FormControl>

				<Button type="submit" colorScheme="orange">
					Submit
				</Button>
			</Stack>
		</form>
	);
};

export default CheckoutForm;
