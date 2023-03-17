import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Header () {
	return (
		// <!-- header containg name and icons -->
		<header class="center">
			<h1 class="name">DANIEL SAPIONE</h1>
			<h3>FRONT END DEVELOPER | PORTFOLIO</h3>
			{/* <!-- line span between name and icons --> */}
			<span class="accent-line"></span>
			{/* <!-- icons --> */}
			<section class="icons-container">
				<a href="https://github.com/dsapione" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faSquareGithub} size='3x' />
					{/* <i class="fa-brands fa-square-github fa-3x"></i> */}
				</a>
				<a href="mailto:dsapion@gmail.com">
					<FontAwesomeIcon icon={faEnvelope} size='3x' />
					{/* <i class="fa-solid fa-envelope fa-3x"></i> */}
				</a>
				<a href="https://www.linkedin.com/in/daniel-sapione/" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} size='3x' />
					{/* <i class="fa-brands fa-linkedin fa-3x"></i> */}
				</a>
			</section>
		</header>
	);
};

export default Header;