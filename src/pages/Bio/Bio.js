import React from 'react';
import './Bio.css';
import photo from './photo.jpeg';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Bio() {
	return (
		<>
			<Header />
			<main className="main">
				<section className="first-text">
					My name is <br /><span className="large-text">Ludvig Boysen</span><br /><br />
					I am a <br /><span className="large-text">full stack web developer</span>
				</section>
				
				<img src={photo} alt="Ludvig Boysen" className="photo" />
				<section className="bio-text">
				<p>I am familiar with PHP, SQL, Node & Express, Javascript & AJAX, React, and Redux</p>
				<br />
				<p>I am a web server programmer, perpetual improver, and command line enjoyer. I like to learn from those more skilled than I am, and teach those less skilled. I am open minded about different ways to solve the same problem, and adaptable to teams, technologies, and methodologies.</p>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Bio;