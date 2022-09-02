import QuickAction from '../../components/QuickAction';
import { useContext } from 'react';
import ActionContext from '../../context/ActionContext';

const QuickActions = ({ screen }) => {
	const { quickActions } = useContext(ActionContext);
	const { setOpenSearch } = quickActions.search;

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
				<QuickAction icon="search" callback={() => setOpenSearch(true)} />
			</li>
		</ul>
	);
};

export default QuickActions;
