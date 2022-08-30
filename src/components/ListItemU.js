import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const ListItemU = ({ item }) => {
	const variants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
		},
	};
	const navigate = useNavigate();
	return (
		<li
			variants={variants}
			className="flex items-center gap-2	p-4 border-b border-b-slate-200 hover:bg-slate-200/25 transition"
			onClick={() => navigate(`/kunder/${item.id}`)}
		>
			<div className="relative w-12 h-12">
				<motion.img
					initial={{ scale: 0.5, opacity: 0, y: 0 }}
					animate={{
						scale: 0.9,
						opacity: 0.5,
						y: 8,
						transition: { duration: 0.5, delay: 0.25 },
					}}
					className="absolute h-12 w-12 rounded-full blur-lg"
					src={`http://localhost:3001/${item.image}`}
					alt=""
				/>
				<motion.img
					initial={{ scale: 0.5, opacity: 0 }}
					animate={{
						scale: 1,
						opacity: 1,
						transition: { duration: 0.5, ease: 'easeInOut' },
					}}
					className="absolute w-12 h-12 rounded-full"
					src={`http://localhost:3001/${item.image}`}
					alt={item.name}
				/>
			</div>

			<div className="w-1/2">
				<Link
					className="block font-bold text-slate-800 w-full whitespace-nowrap overflow-hidden overflow-ellipsis"
					to={`/kunder/${item.id}`}
				>
					{item.name}
				</Link>
				<p className="text-sm text-slate-400">#{item.id}</p>
			</div>
			<div className="flex ml-auto">
				<div className="h-6 w-6 bg-amber-400 rounded-full -ml-2"></div>
				<div className="h-6 w-6 bg-amber-400 rounded-full -ml-2"></div>
				<div className="h-6 w-6 bg-amber-400 rounded-full -ml-2"></div>
			</div>
		</li>
	);
};

export default ListItemU;
