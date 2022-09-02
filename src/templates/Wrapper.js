import { motion } from 'framer-motion';

const Wrapper = ({ children, colSpan, rowSpan }) => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className={`p-6 rounded-lg bg-slate-50 ${
				colSpan || null
			} flex flex-col gap-4`}
		>
			{children}
		</motion.section>
	);
};

export default Wrapper;
