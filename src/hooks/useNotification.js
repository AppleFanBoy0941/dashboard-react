import { useContext, useEffect, useState } from 'react';
import NotificationContext from '../context/NotificationContext';

const useNotification = () => {
	const [thisNotification, setThisNotification] = useState(null);
	const { notifications, setNotifications } = useContext(NotificationContext);

	useEffect(() => {
		setTimeout(() => {
			setNotifications(notifications.filter(n => n.id !== thisNotification.id));
		}, 5000);
	}, [setNotifications, thisNotification, notifications]);

	const updateNotifications = notification => {
		setThisNotification(notification);
		console.log('useNotification', notification.id);
		setNotifications([...notifications, notification]);
	};

	return updateNotifications;
};

export default useNotification;
