import useFetch from '../hooks/useFetch';
import { useState } from 'react';

const ListOrder = ({ id }) => {
	const { data, isLoading, error } = useFetch(
		`http://localhost:3001/orders/${id}`
	);
	return (
		<li className="flex justify-between p-4 border-b border-b-slate-200">
			<div>
				<h3 className="">{data && data.id}</h3>
				<p className="text-sm font-medium text-slate-400">
					{data && data.total} varer
				</p>
			</div>
			<div></div>
		</li>
	);
};

export default ListOrder;
