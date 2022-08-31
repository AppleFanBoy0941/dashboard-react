import useFetch from '../hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import SearchItem from './SearchItem';
import { AnimatePresence, motion } from 'framer-motion';

const SearchCat = ({ cat, search }) => {
	const { data, isLoading, error } = useFetch(
		`http://localhost:3001/${cat}?q=${search}`
	);
	console.log(data);
	return (
		<motion.ul>
			<p className="px-4 py-2 text-sm uppercase tracking-wider text-slate-400 font-bold bg-slate-200/25">
				{cat}
			</p>
			{isLoading && <LoadingSpinner />}
			{error && <p>{error}</p>}
			<AnimatePresence>
				{data.length > 0 ? (
					data.map((item, index) => (
						<SearchItem key={item.id} item={item} cat={cat} index={index} />
					))
				) : isLoading ? null : (
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="p-4 text-slate-300 text-sm"
					>
						No results found
					</motion.p>
				)}
			</AnimatePresence>
		</motion.ul>
	);
};

export default SearchCat;
