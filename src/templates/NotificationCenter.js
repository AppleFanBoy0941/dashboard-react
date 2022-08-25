import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import Notification from '../components/Notification';

const NotificationCenter = () => {
	const { notifications, setNotifications } = useContext(NotificationContext);
	console.log(notifications);
	return (
		<Reorder.Group
			values={notifications}
			initial={{ opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: 400, opacity: 0 }}
			className="fixed top-2 right-2 w-96 z-50 flex flex-col items-center justify-center gap-4"
		>
			<AnimatePresence>
				{notifications.map(notification => (
					<Reorder.Item
						key={notification.id}
						initial={{ y: 120, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -120, opacity: 0 }}
					>
						<Notification
							body={notification.body}
							title={notification.title}
							type={notification.type}
							link={notification.link}
							callback={notification.callback}
							callbackLabel={notification.callbackLabel}
							id={notification.id}
						/>
					</Reorder.Item>
				))}
			</AnimatePresence>
		</Reorder.Group>
	);
};

export default NotificationCenter;
