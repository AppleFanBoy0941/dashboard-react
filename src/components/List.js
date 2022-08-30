import { motion } from 'framer-motion';

const List = ({ children }) => {
	const variants = {
		initial: {
			opacity: 0,
			y: 40,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
			},
		},
	};
	return (
		<motion.ul
			variants={variants}
			initial="initial"
			animate="animate"
			className="border border-slate-200 rounded-lg overflow-y-auto h-full"
		>
			{children}
		</motion.ul>
	);
};

export default List;
