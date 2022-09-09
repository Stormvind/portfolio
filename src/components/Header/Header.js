import './Header.css';
import Navmenu from '../Navmenu/Navmenu';
import Hamburger from '../Hamburger/Hamburger';

function Header() {
	return (
		<>
			<header className="header">
				<Hamburger className="hamburger"/>
				<div className="header__text">
					Ludvig Boysen
				</div>

				<Navmenu />
			</header>
		</>
	);
}

export default Header;