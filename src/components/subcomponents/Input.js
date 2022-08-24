import { motion } from 'framer-motion';
import { useState } from 'react';

const Input = ({ label, value, setValue, error, type }) => {
	const [isFocused, setIsFocused] = useState(false);

	const labelVariants = {
		initial: {
			top: '50%',
			translateY: '-50%',
		},
		animate: {
			top: 0,
			translateY: 0,
			scale: 0.6,
			x: -15,
			opacity: 0.75,
		},
	};

	return (
		<label
			className={`relative px-4 pt-5 pb-1 ${
				error ? 'bg-red-50' : 'bg-slate-50'
			} rounded-md border ${
				isFocused
					? 'border-slate-400'
					: error
					? 'border-red-400'
					: 'border-slate-200'
			} transition-all`}
		>
			<motion.span
				variants={labelVariants}
				animate={isFocused ? 'animate' : 'initial'}
				transition={{ duration: 0.2 }}
				className="absolute text-slate-600"
			>
				{label}
			</motion.span>
			<input
				className="w-full bg-transparent text-slate-800 focus:outline-none"
				type={type || 'text'}
				value={value}
				onChange={e => setValue(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => !value && setIsFocused(false)}
			/>
		</label>
	);
};

export default Input;
