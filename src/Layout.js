import Nav from './templates/Nav';
import { Outlet } from 'react-router-dom';
import SignIn from './templates/modals/SignIn';
import { AnimatePresence } from 'framer-motion';
import NotificationCenter from './templates/NotificationCenter';
import TokenContext from './context/TokenContext';
import { useContext } from 'react';
import Search from './components/Search';
import ActionContext from './context/ActionContext';
import useKeyPress from './hooks/useKeyPress';
import AddProduct from './components/AddProduct';

const Layout = () => {
	const { token } = useContext(TokenContext);
	const { quickActions } = useContext(ActionContext);
	const { openSearch, setOpenSearch } = quickActions.search;
	const { openAddProduct, setOpenAddProduct } = quickActions.addProduct;

	useKeyPress('f', ['shiftKey', 'ctrlKey'], () => setOpenSearch(!openSearch));
	useKeyPress('f', ['shiftKey', 'metaKey'], () => setOpenSearch(!openSearch));
	useKeyPress(' ', ['shiftKey'], () => setOpenSearch(!openSearch));
	useKeyPress('4', ['metaKey'], () => setOpenSearch(!openSearch));

	useKeyPress('a', ['shiftKey', 'ctrlKey'], () =>
		setOpenAddProduct(!openAddProduct)
	);
	useKeyPress('a', ['shiftKey', 'metaKey'], () =>
		setOpenAddProduct(!openAddProduct)
	);

	return (
		<>
			<div className="flex flex-col w-screen h-screen md:flex-row">
				<AnimatePresence>{openSearch && <Search />}</AnimatePresence>
				<AnimatePresence>{openAddProduct && <AddProduct />}</AnimatePresence>
				<NotificationCenter />
				<Nav />
				<div className="pt-24 w-full md:pt-0 md:h-screen">
					{token && <Outlet />}
					<AnimatePresence>{!token && <SignIn />}</AnimatePresence>
				</div>
			</div>
		</>
	);
};

export default Layout;
