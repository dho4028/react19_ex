import { Route, Routes, useLocation } from 'react-router-dom';
import MovieDetail from './pages/MovieDetail';
import MovieList from './pages/MovieList';
import Header from './components/Header';
import { AnimatePresence } from 'framer-motion';
function App() {
	const location = useLocation();
	return (
		<>
			<main className='theme-bg w-full h-screen'>
				<Header />
				<AnimatePresence mode='wait'>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<MovieList />} />
						<Route path='/detail/:id' element={<MovieDetail />} />
					</Routes>
				</AnimatePresence>
			</main>
		</>
	);
}

export default App;
