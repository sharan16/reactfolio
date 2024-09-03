import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	const workExperiences = [
		{
			company: "Datadog",
			logo: "./twitter.png",
			position: "Software Engineer",
			duration: "2019 - Present",
			responsibilities: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			],
		},
		{
			company: "Datadog",
			logo: "./twitter.png",
			position: "Software Engineer",
			duration: "2019 - Present",
			responsibilities: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			],
		},
		{
			company: "Datadog",
			logo: "./twitter.png",
			position: "Software Engineer",
			duration: "2019 - Present",
			responsibilities: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
			],
		},
		// Add more work experiences here
	];

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{workExperiences.map((work, index) => (
							<div className="work" key={index}>
								<img
									src={work.logo}
									alt={work.company}
									className="work-image"
								/>
								<div className="work-info">
									<div className="work-title-row">
										<div>
											<div className="work-title">{work.position}</div>
											<div className="work-subtitle">{work.company}</div>
										</div>
										<div className="work-duration">{work.duration}</div>
									</div>
									<ul className="work-bullets">
										{work.responsibilities.map((responsibility, idx) => (
											<li key={idx}>{responsibility}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
