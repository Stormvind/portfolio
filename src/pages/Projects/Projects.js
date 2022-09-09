import React from 'react';
import './Projects.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Projectsdata from './Projectsdata';

function Projects() {
	return (
		<>
			<Header />
			<main className="main">
				<div className="project-entries">
					{Projectsdata.projects.map((project, index)=>
						<div className="project-entries__entry-wrapper" key={index}>
							<img 
								className="project-entries__img"
								src={project.imgPath}
								alt="screenshot"
							/>
							<div className="project-entries__project-text">
								<div>
									<h1 className="project-entries__name">{project.name}</h1>
									<h2 className="project-entries__date">{project.date}</h2>
									<p className="project-entries__description">{project.description}</p>
								</div>
								<div>
									<p className="project-entries__link">
										<a href={project.sourceCodeLink}>Source code</a>
									</p>
									<p className="project-entries__link">
										<a href={project.deployedAppLink}>Deployed app</a>
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Projects;