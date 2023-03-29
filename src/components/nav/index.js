import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav () {
	const pages = [
		{
			name: 'HOME',
			link: '/'
		},
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

	const [open, setOpen] = useState(false);

	return (
		<nav className="nav">
			<button className="menuBtn" onClick={() => setOpen(!open)}>MENU</button>
			<ul>
				{pages.map(page => (
					<NavLink to={page.link} end={true} key={page.name} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
						{ open && <li> 
												<h2>{page.name}</h2>
											</li>}
					</NavLink>
				))}
			</ul>			
		</nav>
	);
};

export default Nav;