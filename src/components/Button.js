import FeatherIcon from 'feather-icons-react';

const Button = ({
	text,
	icon,
	callback,
	iconRight,
	fullWidth,
	type,
	styling,
}) => {
	return (
		<button
			onClick={callback}
			type={type}
			className={`py-2 px-6 flex gap-2 rounded-lg font-medium transition ${
				iconRight && `flex-row-reverse`
			} justify-center ${fullWidth ? `w-full` : `w-fit`} ${
				styling === 'secondary'
					? `bg-transparent border border-slate-300 text-slate-600 hover:bg-slate-400/10 hover:border-slate-400 hover:text-slate-700`
					: styling === 'tertiary'
					? `text-slate-600 border border-transparent hover:border-slate-300 hover:bg-slate-400/10`
					: `bg-slate-400 border border-slate-300 text-slate-800 hover:bg-slate-500 hover:border-slate-400 hover:text-slate-50`
			}`}
		>
			{icon && <FeatherIcon className="opacity-75" icon={icon} />}
			{text && text}
		</button>
	);
};

export default Button;
