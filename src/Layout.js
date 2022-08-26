import Nav from './templates/Nav';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './templates/modals/SignIn';
import { AnimatePresence } from 'framer-motion';
import NotificationCenter from './templates/NotificationCenter';
import TokenContext from './context/TokenContext';
import { useContext } from 'react';
import Search from './components/Search';
import ActionContext from './context/ActionContext';
import useKeyPress from './hooks/useKeyPress';

const Layout = () => {
	// const [loggedIn, setLoggedIn] = useLocalStorage('isLoggedIn', false);
	const { token } = useContext(TokenContext);
	const { quickActions } = useContext(ActionContext);
	const { openSearch, setOpenSearch } = quickActions.search;

	useKeyPress(['shiftKey', 'ctrlKey', 'f'], () => setOpenSearch(!openSearch));

	// useEffect(() => {
	// 	loggedIn ? setToken(true) : setToken(false);
	// }, [loggedIn]);

	return (
		<>
			<div className="flex flex-col w-screen h-screen lg:flex-row">
				<AnimatePresence>{openSearch && <Search />}</AnimatePresence>
				<NotificationCenter />
				<Nav />
				<div className="container">
					{token && <Outlet />}
					<AnimatePresence>{!token && <SignIn />}</AnimatePresence>
				</div>
			</div>
		</>
	);
};

export default Layout;
