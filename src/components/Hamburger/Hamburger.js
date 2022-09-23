function Hamburger() {
	return (
		<>
			<input type="checkbox" className="hamburger-checkbox" id="hamburger-checkbox" onChange={hamburgerClicked} />
			<label className="hamburger" htmlFor="hamburger-checkbox">
				<span className="hamburger__span"></span>
				<span className="hamburger__span"></span>
				<span className="hamburger__span"></span>
			</label>

		</>
	);
}

function hamburgerClicked() {
	if(document.getElementById("hamburger-checkbox").checked) {
		if (document.getElementById('main-content-header')) {
			document.getElementById("main-content-header").style.display = "none";
		}
		document.getElementById("main-content").style.display = "none";
	}
	else {
		if (document.getElementById("main-content-header")) {
			document.getElementById("main-content-header").style.display = "block";
		}
		document.getElementById("main-content").style.display = "block";
	}
}

export default Hamburger;