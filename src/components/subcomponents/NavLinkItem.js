import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";
const NavLinkItem = ({ link, icon, content }) => {
  return (
    <NavLink className="flex gap-2 text-slate-600" to={link}>
      <FeatherIcon icon={icon} />
      {content}
    </NavLink>
  );
};

export default NavLinkItem;
