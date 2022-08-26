import FeatherIcon from 'feather-icons-react';
import { motion } from 'framer-motion';
import Button from './Button';
import { useEffect, useContext } from 'react';
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

	// setTimeout(() => {
	// 	setNotifications(notifications.filter(n => n.id !== id));
	// }, 5000);

	return (
		<motion.article
			layout
			initial={{ y: 120, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: -120, opacity: 0 }}
			id={id}
			key={id}
			className="border border-slate-200 rounded-lg bg-slate-100 w-96"
		>
			<div
				className="grid items-start gap-2 p-4"
				style={{ gridTemplateColumns: '24px 1fr' }}
			>
				<FeatherIcon
					className={`${
						type === 'success'
							? 'text-green-500'
							: type === 'error'
							? 'text-red-500'
							: type === 'warning'
							? 'text-yellow-500'
							: 'text-slate-500'
					}`}
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
					<h3 className="font-bold mb-2 text-slate-800">{title}</h3>
					<p className="text-slate-600">{body}</p>
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
