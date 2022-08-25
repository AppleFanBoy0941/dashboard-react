import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotificationContext from './context/NotificationContext';
import { useState } from 'react';

import Layout from './Layout';
import Home from './pages/Home';

function App() {
	const [notifications, setNotifications] = useState([]);
	return (
		<NotificationContext.Provider value={{ notifications, setNotifications }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</NotificationContext.Provider>
	);
}

export default App;
