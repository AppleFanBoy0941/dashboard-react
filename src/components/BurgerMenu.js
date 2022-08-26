import { motion } from 'framer-motion';

const BurgerMenu = ({ isOpen, setIsOpen }) => {
	const buttonVariant = {
		initial: {
			opacity: 0,
		},
		closed: {
			rotate: 0,
			opacity: 1,
		},
		open: {
			rotate: 90,
			opacity: 1,
		},
	};
	const spanVariant = {
		closed: {
			width: 24,
			height: 3,
		},
		open: {
			width: 4,
			height: 4,
		},
	};
	return (
		<motion.button
			onClick={() => setIsOpen(!isOpen)}
			className="p-4 rounded-full md:hidden"
			variants={buttonVariant}
			initial="initial"
			animate={isOpen ? 'open' : 'closed'}
			whileHover={{ background: '#94a3b880' }}
		>
			<div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
				<motion.span
					className="bg-slate-800 block rounded-full"
					variants={spanVariant}
				></motion.span>
				<motion.span
					className="bg-slate-800 block rounded-full"
					variants={spanVariant}
				></motion.span>
				<motion.span
					className="bg-slate-800 block rounded-full"
					variants={spanVariant}
				></motion.span>
			</div>
		</motion.button>
	);
};

export default BurgerMenu;
