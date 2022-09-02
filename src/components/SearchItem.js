import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ActionContext from '../context/ActionContext';

const SearchItem = ({ item, cat, index }) => {
	const { quickActions } = useContext(ActionContext);
	const { setOpenSearch } = quickActions.search;
	const navigate = useNavigate();
	const tab =
		cat === 'users' ? 'kunder' : cat === 'products' ? 'produkter' : 'ordre';
	return (
		<motion.li
			initial={{ opacity: 0, y: -20 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.25,
					delay: index * 0.1,
					ease: 'easeOut',
				},
			}}
			exit={{
				opacity: 0,
				y: -20,
				transition: {
					duration: 0.25,
					ease: 'easeOut',
				},
			}}
			key={item.id}
			layout
			className="p-4 border-b border-b-slate-200 cursor-pointer"
		>
			<div
				onClick={() => {
					navigate(`/${tab}/${item.id}`);
					setOpenSearch(false);
				}}
			>
				<Link to={`/${tab}/${item.id}`} className="font-bold text-slate-600">
					{cat === 'products'
						? item.name
						: cat === 'orders'
						? item.id
						: item.name}
				</Link>
				<p className="text-slate-400 text-sm">
					{cat === 'products'
						? item.brand
						: cat === 'orders'
						? item.date
						: cat === 'users'
						? item.id
						: null}
				</p>
			</div>
		</motion.li>
	);
};

export default SearchItem;
