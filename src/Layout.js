import Nav from './templates/Nav';
import { Outlet } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import SignIn from './templates/modals/SignIn';
import { AnimatePresence, motion } from 'framer-motion';
import NotificationCenter from './templates/NotificationCenter';
import TokenContext from './context/TokenContext';
import { useContext } from 'react';

const Layout = () => {
	const [loggedIn, setLoggedIn] = useLocalStorage('isLoggedIn', false);
	const { token, setToken } = useContext(TokenContext);

	useEffect(() => {
		loggedIn ? setToken(true) : setToken(false);
	}, [loggedIn]);

	return (
		<div className="flex flex-col lg:flex-row">
			<NotificationCenter />
			<Nav />
			<div className="container">
				{token && <Outlet />}
				<AnimatePresence>{!token && <SignIn />}</AnimatePresence>
			</div>
		</div>
	);
};

export default Layout;
