import { motion } from 'framer-motion';
import Input from '../../components/subcomponents/Input';
import { useState, useContext, useEffect } from 'react';
import Button from '../../components/Button';
import FeatherIcon from 'feather-icons-react';
import NotificationContext from '../../context/NotificationContext';
import TokenContext from '../../context/TokenContext';

const SignIn = () => {
	const { notifications, setNotifications } = useContext(NotificationContext);
	const { setToken } = useContext(TokenContext);

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
		const newNotification = {
			type,
			title,
			body,
			id: notifications.length > 0 ? notifications.length + 1 : 0,
		};
		setNotifications([...notifications, newNotification]);
		setTimeout(() => {
			setNotifications(notifications.filter(n => n.id !== newNotification.id));
		}, 5000);
	};

	const handleSubmit = e => {
		e.preventDefault();
		fetch('http://localhost:3001/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then(res => {
				if (res.status === 200 || res.status === 201) {
					return res.json();
				} else {
					addNotification(
						'error',
						'Der opstod en fejl',
						'Der opstod en fejl da vi skulle logge dig ind. Tjek dit brugernavn og adgangskode og prøv igen.'
					);
					throw new Error('Der opstod en fejl');
				}
			})
			.then(data => {
				setToken(data.token);
			});
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
					<Input
						label="Brugernavn"
						value={username}
						setValue={setUsername}
						id="username"
					/>
					<Input
						label="Adgangskode"
						value={password}
						setValue={setPassword}
						type="password"
						id="password"
					/>
					<div className="flex justify-between items-center mt-4">
						<button
							type="button"
							className="flex items-center text-sm gap-2 p-2 transition text-slate-400 hover:bg-slate-400/10 rounded-lg"
							onClick={() =>
								addNotification(
									'info',
									'Glemt adgangskode',
									'Har du prøvet "Jens" og "1234"?'
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
