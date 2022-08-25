import { motion } from 'framer-motion';
import Input from '../../components/subcomponents/Input';
import { useState, useContext } from 'react';
import Button from '../../components/Button';
import FeatherIcon from 'feather-icons-react';
import NotificationContext from '../../context/NotificationContext';

const SignIn = ({ setState, isOpen, setLS }) => {
	const { notifications, setNotifications } = useContext(NotificationContext);
	const handleSubmit = e => {
		e.preventDefault();
		console.log('submitted');
		setLS(true);
		setState(true);
	};
	const containerVariants = {
		initial: {
			opacity: 0,
		},
		enter: {
			opacity: 1,
			transition: {
				duration: 0.25,
				delayChildren: 0.25,
			},
		},
		exit: {
			opacity: 0,
		},
	};
	const modalVariants = {
		initial: {
			scale: 0.5,
			opacity: 0,
		},
		enter: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 0.5,
			},
		},
		exit: {
			scale: 1.5,
			opacity: 0,
		},
	};
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const addNotification = (type, title, body) => {
		console.log('notification');
		setNotifications([
			...notifications,
			{
				type,
				title,
				body,
				id:
					notifications.length > 0
						? Math.max(...notifications.map(n => n.id)) + 1
						: 0,
			},
		]);
	};

	return (
		<motion.div
			variants={containerVariants}
			initial="initial"
			animate="enter"
			exit="exit"
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 w-screen h-screen bg-slate-50 bg-opacity-25 backdrop-blur-xl flex justify-center items-center"
		>
			<motion.div
				variants={modalVariants}
				transition={{ duration: 0.5 }}
				className="p-6 bg-slate-100 rounded-md border border-slate-200 shadow-sm"
			>
				<h1 className="text-xl font-bold text-slate-600 mb-2">Log ind</h1>
				<p className="text-slate-500">
					Venligst log ind, før du kan få adgang til Lærevenlige Slåmidler
				</p>
				<form className="flex flex-col mt-4 gap-2" onSubmit={handleSubmit}>
					<Input label="Brugernavn" value={username} setValue={setUsername} />
					<Input
						label="Adgangskode"
						value={password}
						setValue={setPassword}
						type="password"
					/>
					<div className="flex justify-between items-center mt-4">
						<button
							type="button"
							className="flex items-center text-sm gap-2 p-2 transition text-slate-400 hover:bg-slate-400/10 rounded-lg"
							onClick={() =>
								addNotification(
									'info',
									'Info',
									'Du har ikke adgang til denne funktion'
								)
							}
						>
							<FeatherIcon icon="help-circle" />
							Glemt adgangskode?
						</button>
						<Button
							type="submit"
							text="Log ind"
							icon="chevron-right"
							iconRight
						/>
					</div>
				</form>
			</motion.div>
		</motion.div>
	);
};

export default SignIn;
