import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeatherIcon from 'feather-icons-react';

const Accordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<motion.article className="bg-slate-100 border border-slate-200 rounded-md overflow-y-hidden pb-4 my-4">
			<div
				className={`flex items-center justify-between p-4 pb-0 cursor-pointer ${
					isOpen ? 'mb-0' : 'mb-0'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="font-bold text-slate-400 select-none">{title}</h3>
				<button
					className="p-1 hover:bg-slate-200 rounded-full transition-all"
					onClick={() => setIsOpen(!isOpen)}
				>
					<FeatherIcon
						className={`w-4 h-4 text-slate-400 ${
							isOpen ? 'rotate-180' : 'rotate-0'
						} transition-all`}
						icon="chevron-down"
					/>
				</button>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							opacity: 0,
							height: 0,
							y: 40,
							marginTop: 0,
							scale: 0.95,
						}}
						animate={{
							opacity: 1,
							height: 'auto',
							y: 0,
							marginTop: 8,
							scale: 1,
						}}
						exit={{ opacity: 0, height: 0, y: 40, marginTop: 0, scale: 0.95 }}
						transition={{ duration: 0.25 }}
						className="px-4 text-sm font-medium text-slate-600"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.article>
	);
};

export default Accordion;
