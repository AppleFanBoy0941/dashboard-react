import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotificationContext from './context/NotificationContext';
import { useState } from 'react';

import Layout from './Layout';
import Home from './pages/Home';
import TokenContext from './context/TokenContext';

function App() {
	const [notifications, setNotifications] = useState([]);
	const [token, setToken] = useState(null);

	return (
		<NotificationContext.Provider value={{ notifications, setNotifications }}>
			<TokenContext.Provider value={{ token, setToken }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</TokenContext.Provider>
		</NotificationContext.Provider>
	);
}

export default App;
