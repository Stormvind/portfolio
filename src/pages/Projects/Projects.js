import React from 'react';
import './Projects.css';
import Footer from '../../components/Footer/Footer';
import Navcontainer from '../../components/Navcontainer/Navcontainer';
import Projectsdata from './Projectsdata';

function Projects() {
	return (
		<>
			<Navcontainer />
				<main className="main-content" id="main-content">
					{Projectsdata.projects.map((project, index)=>
						<div className="main-contet__entry-wrapper" key={index}>
							<img 
								className="main-content__img"
								src={project.imgPath}
								alt="screenshot"
							/>
							<div className="main-content__project-text">
								<div>
									<h1 className="main-content__name">{project.name}</h1>
									<h2 className="main-content__date">{project.date}</h2>
									<p className="main-content__description">{project.description}</p>
								</div>
								<div>
									<p className="main-content__link">
										<a href={project.sourceCodeLink}>Source code on GitHub</a>
									</p>
									<p className="main-content__link">
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