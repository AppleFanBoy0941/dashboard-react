import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

const Badge = ({ badge, index, size }) => {
	return (
		<>
			{badge && (
				<motion.div
					initial={{ opacity: 0, marginRight: index === 0 ? -16 : -32 }}
					animate={{
						opacity: 1,
						marginRight: -8,
						transition: {
							duration: 1,
							delay: 0.5,
							type: 'spring',
							damping: 20,
						},
					}}
					className={classNames(
						'flex justify-center items-center h-10 w-10 rounded-full border-2 -mr-2 p-2',
						{
							'bg-red-400 border-red-300 text-black': badge.color === 'red',
							'bg-amber-400 border-amber-300 text-black':
								badge.color === 'amber',
							'bg-green-400 border-green-300 text-black':
								badge.color === 'green',
							'bg-blue-400 border-blue-300 text-black': badge.color === 'blue',
							'bg-fuchsia-300 border-fuchsia-200 text-black':
								badge.color === 'fuchsia',
							'bg-sky-300 border-sky-200 text-black': badge.color === 'sky',
							'h-6 w-6 p-1 border': size === 'small',
						}
					)}
				>
					{badge.icon && <FeatherIcon strokeWidth="3" icon={badge.icon} />}
					{badge.text && (
						<span
							className={`${
								size === 'small' ? 'text-xs' : 'text-base'
							} font-extrabold text-black`}
						>
							{badge.text}
						</span>
					)}
				</motion.div>
			)}
		</>
	);
};

export default Badge;

// `flex justify-center items-center h-10 w-10 rounded-full border -mr-2 p-2 ${badge.bg} ${badge.color} ${badge.border}`
