import { motion } from 'framer-motion';

const LoadingSpinner = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex p-4 justify-center items-center gap-2"
		>
			<motion.span
				animate={{
					opacity: [1, 0, 0],
					scale: [1.1, 1, 1],
					transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' },
				}}
				className="block h-4 w-4 rounded-full bg-slate-400"
			></motion.span>
			<motion.span
				animate={{
					opacity: [0, 1, 0],
					scale: [1, 1.1, 1],
					transition: {
						duration: 1,
						repeat: Infinity,
						repeatType: 'reverse',
					},
				}}
				className="block h-4 w-4 rounded-full bg-slate-400"
			></motion.span>
			<motion.span
				animate={{
					opacity: [0, 0, 1],
					scale: [1, 1, 1.1],
					transition: {
						duration: 1,
						repeat: Infinity,
						repeatType: 'reverse',
					},
				}}
				className="block h-4 w-4 rounded-full bg-slate-400"
			></motion.span>
		</motion.div>
	);
};

export default LoadingSpinner;
