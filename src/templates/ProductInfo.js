import useFetch from '../hooks/useFetch';
import FeatherIcon from 'feather-icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Accordion from '../components/Accordion';

const ProductInfo = ({ id }) => {
	const url = `http://localhost:3001/`;
	const { data } = useFetch(`${url}products?id=${id}`);
	const item = data[0];
	return (
		<>
			<div className="flex items-end gap-4">
				{item?.image ? (
					<img
						className="w-32 h-32 rounded-md shrink-0"
						src={`http://localhost:3001/${item.image}`}
						alt={item.name}
					/>
				) : (
					<div className="flex justify-center items-center w-24 h-24 rounded-md bg-slate-100 border border-slate-200 shrink-0">
						<FeatherIcon
							icon="camera-off"
							className="w-12 h-12 text-slate-400"
						/>
					</div>
				)}
				<motion.div
					initial={{ x: 40, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
				>
					<p className="text-slate-400 font-semibold">{item && item.brand}</p>
					<h1 className="text-2xl font-extrabold text-slate-800">
						{item && item.name}
					</h1>
				</motion.div>
			</div>
			<Accordion title="Beskrivelse">{item && item.description}</Accordion>
		</>
	);
};

export default ProductInfo;
