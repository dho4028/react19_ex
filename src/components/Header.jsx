import { Link } from 'react-router-dom';
import Logo from './Logo';
import ToggleTheme from './ToggleTheme';

export default function Header() {
	return (
		<header className='w-full px-[10vw] py-6 fixed top-0 left-0 z-100 backdrop-blur-sm flex justify-between'>
			<Logo title='DCODELAB' desc='REVIEWING THE MOVIES' />
			<ToggleTheme />
		</header>
	);
}
