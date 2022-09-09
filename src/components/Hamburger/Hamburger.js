import './Hamburger.css';

function Hamburger() {
	return (
		<>
			<input type="checkbox" className="hamburger-checkbox" id="hamburger-checkbox" />
			<label className="hamburger" htmlFor="hamburger-checkbox">
				<span className="hamburger__span"></span>
				<span className="hamburger__span"></span>
				<span className="hamburger__span"></span>
			</label>
		</>
	);
}

export default Hamburger;