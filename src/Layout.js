import Nav from './templates/Nav';
import { Outlet } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import SignIn from './templates/modals/SignIn';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loggedIn, setLoggedIn] = useLocalStorage('isLoggedIn', false);

	useEffect(() => {
		loggedIn ? setIsLoggedIn(true) : setIsLoggedIn(false);
	}, [loggedIn]);

	return (
		<div className="flex flex-col lg:flex-row">
			<Nav />
			<div className="container">
				efoeofwjf fewfoewfjekfew efewfewofewjff ewfewfoewfojefwe foefeofew
				fewfewf ewfewfewgreg egt webkit-hyphenate-character: h5g3 3 tab-size: t4
				<button
					className="block px-6 py-2 bg-slate-400 rounded-md text-slate-50 border border-slate-300"
					onClick={() => setLoggedIn(false)}
				>
					Reset LS
				</button>
				<Outlet />
			</div>
			<AnimatePresence>
				{isLoggedIn ? null : (
					<SignIn
						setState={setIsLoggedIn}
						isOpen={isLoggedIn}
						setLS={setLoggedIn}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Layout;
