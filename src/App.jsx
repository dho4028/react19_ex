import { Route, Routes } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';
import Header from './components/Header';
function App() {
	return (
		<>
			<main className='theme-bg w-full h-screen'>
				<Header />
				<Routes>
					<Route path='/' element={<MovieList />} />
					<Route path='/detail/:id' element={<MovieDetail />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
