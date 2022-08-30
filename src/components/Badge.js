import FeatherIcon from 'feather-icons-react';

const Badge = ({ badge }) => {
	console.log(badge);

	console.log(badge.bg || 'bg-red-400');
	return (
		<>
			{badge && (
				<div
					className={`flex justify-center items-center h-10 w-10 rounded-full border -mr-2 p-2 ${badge.bg} ${badge.color} ${badge.border}`}
				>
					{badge.icon && <FeatherIcon icon={badge.icon} />}
					{badge.text && (
						<span className="text-sm font-extrabold text-black">
							{badge.text}
						</span>
					)}
				</div>
			)}
		</>
	);
};

export default Badge;
