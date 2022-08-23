import useLocalStorage from './hooks/useLocalStorage';

function App() {
	const [count, setCount] = useLocalStorage('count', 0);
	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>+</button>
		</div>
	);
}

export default App;
