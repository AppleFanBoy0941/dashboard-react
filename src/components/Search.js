import FeatherIcon from 'feather-icons-react';
import { motion, Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import ActionContext from '../context/ActionContext';
import useFetch from '../hooks/useFetch';

const Search = () => {
	const [openFilter, setOpenFilter] = useState(false);
	const { quickActions } = useContext(ActionContext);
	const { setOpenSearch } = quickActions.search;
	const [value, setValue] = useState('');
	useEffect(() => {
		const keyDownHandler = e => {
			if (e.keyCode === 27) {
				setOpenSearch(false);
			}
		};
		window.addEventListener('keydown', keyDownHandler);
		return () => {
			window.removeEventListener('keydown', keyDownHandler);
		};
	}, [setOpenSearch]);

	const { data, isLoading, error } = useFetch(
		'http://localhost:3001/products/'
	);
	console.log(error);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="searchBG fixed w-screen h-screen top-0 left-0 bg-slate-50/25 backdrop-blur z-50 flex flex-col items-center"
			onClick={e =>
				!e.target.className.search('searchBG') && setOpenSearch(false)
			}
		>
			<motion.div
				initial={{ y: 160, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
				exit={{ y: 160, opacity: 0, transition: { duration: 0.2 } }}
				className="fixed top-1/3"
			>
				<label className="flex items-center gap-4 p-2 pl-4 bg-slate-100 border border-slate-300 rounded-lg">
					<FeatherIcon icon="search" className="text-slate-400" />
					<input
						autoFocus
						type="text"
						className="w-96 text-base bg-transparent focus:outline-none text-slate-600"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button
						className={`text-slate-400 p-2 rounded transition ${
							openFilter && `text-slate-50 bg-slate-800`
						}`}
						onClick={() => setOpenFilter(!openFilter)}
					>
						<FeatherIcon icon="filter" />
					</button>
				</label>
			</motion.div>
		</motion.div>
	);
};

export default Search;
