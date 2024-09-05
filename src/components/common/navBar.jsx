import React from "react";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 100; // Adjust this value as needed
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	};

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li className={active === "home" ? "nav-item active" : "nav-item"}>
								<a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className="nav-link">Home</a>
							</li>
							<li className={active === "work" ? "nav-item active" : "nav-item"}>
								<a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection("work"); }} className="nav-link">Work</a>
							</li>
							<li className={active === "about" ? "nav-item active" : "nav-item"}>
								<a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className="nav-link">About</a>
							</li>
							<li className={active === "contact" ? "nav-item active" : "nav-item"}>
								<a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="nav-link">Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
