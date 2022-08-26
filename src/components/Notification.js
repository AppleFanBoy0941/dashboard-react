import FeatherIcon from 'feather-icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { useState, useEffect, useContext } from 'react';
import NotificationContext from '../context/NotificationContext';

const Notification = ({
	body,
	title,
	type,
	link,
	callback,
	callbackLabel,
	id,
}) => {
	const { notifications, setNotifications } = useContext(NotificationContext);
	useEffect(() => {
		setTimeout(() => {
			setNotifications(notifications.filter(n => n.id !== id));
		}, 5000);
	}, []);

	return (
		<motion.article
			initial={{ y: 120, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -120, opacity: 0 }}
			id={id}
			className="border border-slate-200 rounded-lg bg-slate-100"
		>
			<div className="flex items-start gap-2 p-4">
				<FeatherIcon
					icon={
						type === 'error'
							? `alert-circle`
							: type === 'warning'
							? `alert-triangle`
							: type === `success`
							? `check-circle`
							: `info`
					}
				/>
				<div>
					<h3 className="font-bold">{title}</h3>
					<p>{body}</p>
				</div>
			</div>
			{callback && (
				<motion.div>
					<Button onClick={callback} text={callbackLabel} />
				</motion.div>
			)}
		</motion.article>
	);
};

export default Notification;
