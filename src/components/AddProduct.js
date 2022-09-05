import BackgroundBlur from './subcomponents/BackgroundBlur';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import ActionContext from '../context/ActionContext';
import Input from './subcomponents/Input';
import Button from './Button';
import useNotification from '../hooks/useNotification';
import NotificationContext from '../context/NotificationContext';
import TokenContext from '../context/TokenContext';

const AddProduct = () => {
	const notification = useNotification();
	const { notifications } = useContext(NotificationContext);
	const { quickActions } = useContext(ActionContext);
	const { setOpenAddProduct } = quickActions.addProduct;
	const { token } = useContext(TokenContext);

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [stock, setStock] = useState('');
	const [brand, setBrand] = useState('');

	let everyHasValue = false;

	if (name && price > 0 && stock && brand) {
		everyHasValue = true;
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (!everyHasValue) {
			notification({
				type: 'error',
				title: 'Error',
				body: 'Please fill out the form to add product',
				id: notifications.length > 0 ? notifications.length + 1 : 0,
			});
			return;
		}
		const newProduct = {
			name: name,
			brand: brand,
			tags: ['new', 'motor'],
			ean: '5701161713147',
			description: 'Description is coming later',
			purchase_price: `${price * 0.8}`,
			retail_price: price,
			stock: stock,
			user_views: [],
			user_reviews: [],
			orders_id: [],
			discount: '',
			images: [],
		};
		fetch('http://localhost:3001/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: 'Bearer ' + token,
			},
			body: JSON.stringify(newProduct),
		})
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	};

	return (
		<BackgroundBlur setIsOpen={setOpenAddProduct}>
			<motion.div
				initial={{ opacity: 0, y: 160 }}
				animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
				exit={{
					opacity: 0,
					y: 160,
					scale: 0.75,
					transition: { duration: 0.2 },
				}}
				className="border border-slate-300 bg-slate-100 rounded-lg w-140 p-4"
			>
				<h1 className="text-xl font-bold text-slate-600 mb-4">
					Tilføj produkt
				</h1>
				<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
					<div className="flex gap-2 w-full">
						<Input label="Navn på produkt" value={name} setValue={setName} />
						<Input label="Brand" value={brand} setValue={setBrand} />
					</div>
					<div className="flex gap-2 w-full">
						<Input
							label="Pris"
							value={price}
							setValue={setPrice}
							type="number"
						/>
						<Input
							label="Antal på lager"
							value={stock}
							setValue={setStock}
							type="number"
						/>
					</div>
					<Button text="Tilføj produkt" icon="plus-circle" />
				</form>
			</motion.div>
		</BackgroundBlur>
	);
};

export default AddProduct;
