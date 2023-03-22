import React from "react";
import { NavLink } from "react-router-dom";

function HomeNav () {

	const pages = [
		{
			name: 'ABOUT',
			link: '/about'
		},
		{
			name: 'SKILLS',
			link: '/skills'
		},
		{
			name: 'PROJECTS',
			link: '/projects'
		},
		{
			name: 'CONTACT',
			link: '/contact'
		}
	];

	return (
		<nav>
			<ul>
				{pages.map(page => (
					<NavLink to={page.link} end={true} key={page.name} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
						<li className="center" id={page.name}>
							<h2>{page.name}</h2>
						</li>
					</NavLink>
				))}
			</ul>
		</nav>
	);
};

export default HomeNav;