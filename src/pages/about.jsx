import React, { useEffect } from "react";


import INFO from "../data/user";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>


			<div className="page-content">

					<div className="about-container">
						<div className="about-main">
							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
							</div>
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

						</div>
					</div>
				</div>
		</React.Fragment>
	);
};

export default About;
