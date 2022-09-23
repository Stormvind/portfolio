import React from 'react';
import './Projects.css';
import Footer from '../../components/Footer/Footer';
import Navcontainer from '../../components/Navcontainer/Navcontainer';
import Projectsdata from './Projectsdata';

function Projects() {
	return (
		<>
			<Navcontainer />
				<main className="project-main-content" id="main-content">
					{Projectsdata.projects.map((project, index)=>
						<div className="project-main-content__entry-wrapper" key={index}>
							<img 
								className="project-main-content__img"
								src={project.imgPath}
								alt="screenshot"
							/>
							<div className="project-main-content__project-text">
								<div>
									<h1 className="project-main-content__name">{project.name}</h1>
									<h2 className="project-main-content__date">{project.date}</h2>
									<p className="project-main-content__description">{project.description}</p>
								</div>
								<div>
									<p className="project-main-content__link">
										<a href={project.sourceCodeLink}>Source code on GitHub</a>
									</p>
									<p className="project-main-content__link">
										<a href={project.deployedAppLink}>Deployed app</a>
									</p>
								</div>
							</div>
						</div>
					)}
				</main>
			<Footer />
		</>
	);
}

export default Projects;