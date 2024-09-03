import React from "react";
import { Link } from "react-router-dom";

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
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a onClick={() => scrollToSection("home")} style={{ cursor: 'pointer' }}>Home</a>
							</li>
							<li
								className={
									active === "work"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a onClick={() => scrollToSection("work")} style={{ cursor: 'pointer' }}>Work</a>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
								>
								<a onClick={() => scrollToSection("about")} style={{ cursor: 'pointer' }}>About</a>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
								>
								<a onClick={() => scrollToSection("contact")} style={{ cursor: 'pointer' }}>Contact</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
