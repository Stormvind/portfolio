import './Navcontainer.css';
import Navmenu from '../Navmenu/Navmenu';
import Hamburger from '../Hamburger/Hamburger';

function Header() {
	return (
		<>

				<div className="nav-container">
					<Hamburger className="hamburger"/>
					<Navmenu />
				</div>

		</>
	);
}

export default Header;