import useFetch from '../hooks/useFetch';
import { AnimatePresence, motion } from 'framer-motion';
import Badge from '../components/Badge';

const UserInfo = ({ id }) => {
	const url = `http://localhost:3001/`;
	console.log(id);
	const { data, isLoading, error } = useFetch(`${url}users?id=${id}`);
	console.log(data);
	const item = data[0];
	console.log(item);
	return (
		<>
			<div className="flex items-end justify-between">
				<AnimatePresence>
					{item && (
						<div key="img" className="relative w-32 h-32">
							<motion.img
								initial={{ scale: 0.5, opacity: 0, y: 0 }}
								animate={{
									scale: 0.9,
									opacity: 0.5,
									y: 8,
									transition: { duration: 0.5, delay: 0.25 },
								}}
								className="absolute h-32 w-32 rounded-full blur-lg"
								src={`${url}${item.image}`}
								alt=""
							/>
							<motion.img
								initial={{ scale: 0.5, opacity: 0 }}
								animate={{
									scale: 1,
									opacity: 1,
									transition: { duration: 0.5, ease: 'easeInOut' },
								}}
								className="absolute w-32 h-32 rounded-full"
								src={`${url}${item.image}`}
								alt={item.name}
							/>
						</div>
					)}
					{item?.badges && (
						<ul key="badges" className="flex flex-row-reverse">
							{item.badges.map((badge, index) => (
								<Badge key={index} badge={badge} />
							))}
						</ul>
					)}
				</AnimatePresence>
			</div>
			{item && (
				<div className="flex flex-col">
					<div className="flex justify-between items-end">
						<motion.h1
							initial={{ opacity: 0, lineHeight: '0px', y: 40 }}
							animate={{
								y: 0,
								opacity: 1,
								lineHeight: '40px',
								transition: { duration: 0.75, damping: 10 },
							}}
							className="block text-2xl font-extrabold text-slate-800 overflow-hidden"
						>
							{item.name}
						</motion.h1>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { delay: 0.5, duration: 0.25 },
							}}
							className="block text-sm font-semibold text-slate-600"
						>
							#{item.id}
						</motion.p>
					</div>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								delay: 0.75,
								duration: 0.25,
							},
						}}
						className="block text-sm font-semibold text-slate-600"
					>
						{item.email}
					</motion.p>
				</div>
			)}
		</>
	);
};

export default UserInfo;
