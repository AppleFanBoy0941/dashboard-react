import { Link, useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

const ListItemP = ({ item }) => {
	const navigate = useNavigate();
	return (
		<li
			className="flex items-center justify-between gap-2	p-4 border-b border-b-slate-200 hover:bg-slate-200/25 transition"
			onClick={() => navigate(`/varer/${item.id}`)}
		>
			<div className="flex items-center gap-2">
				{item.image ? (
					<img
						className="w-12 h-12 rounded-lg"
						src={`http://localhost:3001/${item.image}`}
						alt={item.name}
					/>
				) : (
					<div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-200">
						<FeatherIcon className="text-slate-400" icon="camera-off" />
					</div>
				)}
				<div>
					<Link
						to={`/varer/${item.id}`}
						className="text text-slate-800 font-bold"
					>
						<span className="text-slate-500">{item.brand}</span> {item.name}
					</Link>
					<p className="text-sm text-slate-400">#{item.id}</p>
				</div>
			</div>
			<div className="text-right">
				<p className="text text-slate-700 font-semibold">
					{item.retail_price} DKK
				</p>
				<p className="text-sm text-slate-400">{item.purchase_price} DKK</p>
			</div>
		</li>
	);
};

export default ListItemP;
