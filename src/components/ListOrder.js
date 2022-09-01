import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const ListOrder = ({ id }) => {
	const [quantity, setQuantity] = useState();
	const { data, isLoading, error } = useFetch(
		`http://localhost:3001/orders/${id}`
	);
	data && setQuantity(data.products);
	// data.products.reduce((a, b) => a + b.quantity, 0)
	console.log(quantity);
	console.log(data.products);
	// const sum = data.products.reduce((acc, curr) => acc + curr.quantity, 0);
	// console.log(sum);
	const sumArray = arr => {
		const sum = arr.reduce((acc, curr) => acc + parseInt(curr.quantity), 0);
		console.log(sum);
		return sum;
	};
	return (
		<li className="flex justify-between p-4">
			<div>
				<h3 className="">{data && data.id}</h3>
				<p className="text-sm font-medium text-slate-400">varer</p>
			</div>
			<div></div>
		</li>
	);
};

export default ListOrder;
