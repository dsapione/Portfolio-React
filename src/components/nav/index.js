import React from "react";
// import { NavLink } from 'react-router-dom'

function Nav (props) {

	// const pages = [
	// 	{
	// 		name: 'ABOUT',
	// 		link: '/about'
	// 	},
	// 	{
	// 		name: 'SKILLS',
	// 		link: '/skills'
	// 	},
	// 	{
	// 		name: 'PROJECTS',
	// 		link: '/projects'
	// 	},
	// 	{
	// 		name: 'CONTACT',
	// 		link: '/contact'
	// 	}
	// ];

	return (
		<nav>
			<ul>
				<li class="about-container center">
					<h2>ABOUT</h2>
				</li>
		
				<li class="skills-container center">
					<h2>SKILLS</h2>
				</li>
		
				<li class="projects-container center">
					<h2>PROJECTS</h2>
				</li>
		
				<li class="contact-container center">
					<h2>CONTACT</h2>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;