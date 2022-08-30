import List from '../components/List';
import ListItemU from '../components/ListItemU';
import Wrapper from '../templates/Wrapper';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import UserInfo from '../templates/UserInfo';

const Kunder = () => {
	const { data, isLoading, error } = useFetch('http://localhost:3001/users');
	const { id } = useParams();

	return (
		<main className="p-4 grid gap-4 grid-cols-5 w-full h-full">
			<Wrapper colSpan="col-span-3">
				<h1 className="text-2xl font-extrabold text-slate-600">Kunder</h1>
				{isLoading && <p>Loading...</p>}

				<List>
					{data && data.map(item => <ListItemU key={item.id} item={item} />)}
				</List>
			</Wrapper>
			<Wrapper colSpan="col-span-2">
				{id && <UserInfo key={id} id={id} />}
			</Wrapper>
		</main>
	);
};

export default Kunder;
