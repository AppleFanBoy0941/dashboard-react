import { motion } from 'framer-motion';
import { useEffect } from 'react';

const BackgroundBlur = ({ children, setIsOpen }) => {
	useEffect(() => {
		const keyDownHandler = e => {
			if (e.keyCode === 27) {
				setIsOpen(false);
			}
		};
		window.addEventListener('keydown', keyDownHandler);
		return () => {
			window.removeEventListener('keydown', keyDownHandler);
		};
	}, [setIsOpen]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="blurry-background fixed w-screen h-screen top-0 left-0 bg-slate-50/50 backdrop-blur-lg z-50 flex flex-col items-center justify-center"
			onClick={e =>
				!e.target.className.search('blurry-background') && setIsOpen(false)
			}
		>
			{children}
		</motion.div>
	);
};

export default BackgroundBlur;
