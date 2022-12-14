import FeatherIcon from 'feather-icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import ActionContext from '../context/ActionContext';
import SearchCat from './SearchCat';
import BackgroundBlur from './subcomponents/BackgroundBlur';

const Search = () => {
	const [openFilter, setOpenFilter] = useState(false);
	const { quickActions } = useContext(ActionContext);
	const { setOpenSearch } = quickActions.search;
	const [value, setValue] = useState('');

	return (
		<BackgroundBlur setIsOpen={setOpenSearch}>
			<motion.div
				initial={{ y: 160, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { delay: 0.25 } }}
				exit={{
					y: 160,
					opacity: 0,
					scale: 0.75,
					transition: { duration: 0.2 },
				}}
				className="fixed top-1/3 flex flex-col gap-4"
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
				<AnimatePresence>
					{value && (
						<motion.ul
							initial={{ y: 40, opacity: 0 }}
							animate={{
								y: 0,
								opacity: 1,
								transition: { duration: 0.5, ease: 'easeOut' },
							}}
							exit={{ opacity: 0 }}
							className="flex flex-col max-h-96 overflow-y-auto border border-slate-300 bg-slate-100 rounded-lg"
						>
							<li className="border-b border-b-slate-200">
								<SearchCat cat="products" search={value} />
							</li>
							<li className="border-b border-b-slate-200">
								<SearchCat cat="orders" search={value} />
							</li>
							<li>
								<SearchCat cat="users" search={value} />
							</li>
						</motion.ul>
					)}
				</AnimatePresence>
			</motion.div>
		</BackgroundBlur>
	);
};

export default Search;
