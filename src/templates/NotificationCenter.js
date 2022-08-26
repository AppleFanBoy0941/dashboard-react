import { useContext } from 'react';
import NotificationContext from '../context/NotificationContext';
import { AnimatePresence, motion } from 'framer-motion';
import Notification from '../components/Notification';

const NotificationCenter = () => {
	const { notifications } = useContext(NotificationContext);
	return (
		<motion.ul
			values={notifications}
			initial={false}
			className="fixed top-2 right-2 w-96 z-50 flex flex-col items-center justify-center gap-4"
		>
			<AnimatePresence>
				{notifications.map(notification => (
					<Notification
						key={notification.id}
						body={notification.body}
						title={notification.title}
						type={notification.type}
						link={notification.link}
						callback={notification.callback}
						callbackLabel={notification.callbackLabel}
						id={notification.id}
					/>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default NotificationCenter;
