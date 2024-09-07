import React, { useEffect } from "react";

import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<React.Fragment>

			<div className="page-content">
					<div className="contact-container">
						<div className="title contact-title">
							Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							I'm always open to new opportunities, collaborations, and interesting conversations. Whether you have a question, a proposal, or just want to say hello, I'd love to hear from you. The best way to reach me is via email at:
							<a href={`mailto:${INFO.main.email}`}> {INFO.main.email}</a>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

			</div>
		</React.Fragment>
	);
};

export default Contact;
