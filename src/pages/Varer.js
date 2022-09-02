import useFetch from '../hooks/useFetch';
import Wrapper from '../templates/Wrapper';
import LoadingSpinner from '../components/LoadingSpinner';
import List from '../components/List';
import ListItemP from '../components/ListItemP';
import { useParams } from 'react-router-dom';
import ProductInfo from '../templates/ProductInfo';

const Varer = () => {
	const { data, isLoading } = useFetch('http://localhost:3001/products');
	const { id } = useParams();
	console.log(data);
	return (
		<main className="p-4 grid gap-4 grid-cols-5 w-full h-full">
			<Wrapper colSpan="col-span-3">
				<h1 className="text-2xl font-extrabold text-slate-600">Produkter</h1>
				{isLoading && <LoadingSpinner />}
				<List>{data && data.map(item => <ListItemP item={item} />)}</List>
			</Wrapper>
			<Wrapper colSpan="col-span-2">
				{id && <ProductInfo key={id} id={id} />}
			</Wrapper>
		</main>
	);
};

export default Varer;
