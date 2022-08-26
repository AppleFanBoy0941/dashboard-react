import QuickAction from '../../components/QuickAction';

const QuickActions = ({ screen }) => {
	return (
		<ul
			className={`flex gap-4 md:justify-between md:w-full ${
				screen === 'mobile' ? 'md:hidden' : 'hidden md:flex'
			}`}
		>
			<li>
				<QuickAction icon="plus" />
			</li>
			<li>
				<QuickAction icon="minus" />
			</li>
			<li>
				<QuickAction icon="edit" />
			</li>
			<li>
				<QuickAction icon="search" />
			</li>
		</ul>
	);
};

export default QuickActions;
