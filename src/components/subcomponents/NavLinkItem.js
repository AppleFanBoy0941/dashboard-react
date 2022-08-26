import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
const NavLinkItem = ({ link, icon, content }) => {
	return (
		<NavLink
			className="flex gap-2 px-2 py-2 md:px-5 md:gap-5 text-slate-600 font-medium rounded-lg border border-transparent transition hover:border-slate-300 hover:bg-slate-100 w-full"
			to={link}
		>
			<FeatherIcon className="text-slate-500" icon={icon} />
			{content}
		</NavLink>
	);
};

export default NavLinkItem;
