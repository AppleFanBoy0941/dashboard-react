import { motion } from 'framer-motion';

const SearchItem = ({ item, cat, index }) => {
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
			<div>
				<a href={`/${cat}?${item.id}`} className="font-bold text-slate-600">
					{cat === 'products'
						? item.name
						: cat === 'orders'
						? item.id
						: item.name}
				</a>
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
