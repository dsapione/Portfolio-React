import React from 'react';
import portrait from '../../assets/images/portrait.jpg'

function About () {
	return (
		// about me section with photo
		<section className='about center'>
			<img src={portrait} alt="Headshot of Daniel Sapione"/>
			<p>
				My name is Daniel Sapione, I am currently a car sales man in Connecticut looking for a career change. This porftfolio shows off my skills in HTML and CSS. Which I am learning in my second week of a UCONN full stack coding bootcamp. I am excited for what I will learn in the coming weeks, as I really enjoy this field. I amm self motivated, detailed oriented, and enjoy working though problems. Please go to my 'Work' section to see thing's I am working on and have finished. Always, feel free to contact me through any of the links provided at the bottom of the page.
			</p>
		</section>
	);
};

export default About;