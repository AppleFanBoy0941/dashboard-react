import { motion } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';

const QuickAction = ({ icon, callback }) => {
	return (
		<motion.button
			className="bg-slate-100 flex justify-center items-center h-12 w-12 rounded-full text-slate-400 md:h-16 md:w-16 border border-slate-100"
			onClick={callback}
			whileHover={{ scale: 1.1, color: '#64748b', borderColor: '#CBD5E1' }}
			whileTap={{ scale: 0.9, opacity: 0.75, color: '#64748b' }}
		>
			<FeatherIcon icon={icon} />
		</motion.button>
	);
};

export default QuickAction;
