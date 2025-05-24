import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='w-full px-[10vw] py-6 fixed top-0 left-0 z-100 '>
			<h1 className='font-orbitron text-2xl theme-text font-[800] tracking-tighter leading-none '>
				<Link to='/'>JHJ</Link>
			</h1>
			<h2 className='text-xs font-semibold theme-theme tracking-wide indent-0.5 opacity-50'>
				Reviewing the Movies
			</h2>
		</header>
	);
}
