import './Resume.css';
import photo from './photo.png';
import Footer from '../../components/Footer/Footer';
import Navcontainer from '../../components/Navcontainer/Navcontainer';

function Resume() {
    return (
        <>
        <Navcontainer />
        <header className="main-content-header" id="main-content-header">
            <img src={photo} alt="Ludvig Boysen" className="photo"/>
            <div>
                <h2 className="resume-h2">
                    Ludvig Boysen
                </h2>
                <p className="resume-p">
                    I am a full stack web developer, perpetual improver, and command line enjoyer. 
                    I like to learn from those more skilled than I am, and to teach those less skilled. 
                    I am open minded about different ways to solve the same problem, and adaptable to teams, technologies, and methodologies.
                </p>
            </div>
        </header>
        <main className="main-content" id="main-content">
            <section className="main-content__left-column">
                <h3 className="resume-h3">TECHNICAL SKILLS</h3>
                <div className="left-column__skills">
                    <div className="left-column__skill-item">
                        <h4 className="resume-h4">Server</h4>
                        <div className="resume-div-text">PHP</div>
                        <div className="resume-div-text">Node, Express</div>
                    </div>
                    <div className="left-column__skill-item">
                        <h4 className="resume-h4">Client</h4>
                        <div className="resume-div-text">JavaScript, AJAX</div>
                        <div className="resume-div-text">React</div>
                        <div className="resume-div-text">Redux</div>
                    </div>
                    <div className="left-column__skill-item">
                        <h4 className="resume-h4">Database</h4>
                        <div className="resume-div-text">SQL</div>
                        <div className="resume-div-text">Mongo</div>
                    </div>
                    <div className="left-column__skill-item">
                        <h4 className="resume-h4">Tools</h4>
                        <div className="resume-div-text">TypeScript</div>
                        <div className="resume-div-text">Mocha, Jest</div>
                        <div className="resume-div-text">Docker</div>
                        <div className="resume-div-text">Git, Github</div>
                        <div className="resume-div-text">Hosting platforms (MongoDB Atlas, ElephantSQL, Netlify, Heroku)</div>
                        <div className="resume-div-text">Node package manager</div>
                        <div className="resume-div-text">phpMyAdmin, XAMPP</div>
                        <div className="resume-div-text">ESLint</div>
                        <div className="resume-div-text">VSCode</div>
                    </div>
                    <div className="left-column__skill-item">
                        <h4 className="resume-h4">Methodologies</h4>
                        <div className="resume-div-text">TDD, functional programming</div>
                        <div className="resume-div-text">Agile develpoment</div>
                        <div className="resume-div-text">Mob programming</div>
                        <div className="resume-div-text">CI, CD</div>
                        <div className="resume-div-text">BEM CSS, semantic HTML</div>
                        <div className="resume-div-text">REST</div>
                    </div>
                    <div className="left-column__skill-item">
                        <h4 className="resume-h4">Links</h4>
                        <div className="resume-div-text">GitHub</div>
                        <div className="resume-div-text">LinkedIn</div>                    
                    </div>
                    <div className="left-column__skill-item">
                        <h4 className="resume-h4">Languages</h4>
                        <div className="resume-div-text">Fluent Swedish</div>
                        <div className="resume-div-text">Fluent English</div>
                    </div>
                </div>
            </section>
            <section className="main-content__right-column">
                <h3 className="resume-h3">RELEVANT WORK EXPERIENCE</h3>
                <div className="right-column__experience">
                    <div className="right-column__experience-item">
                        <h4 className="resume-h4">Programming teacher</h4>
                        <h5 className="resume-h5">2021-2022</h5>
                        <p className="resume-p">
                            I taught programming with C#, and web development with HTML, JavaScript, PHP, SQL, 
                            and CSS as a teacher at Thorengruppen.
                        </p>
                    </div>
                    <div className="right-column__experience-item">
                        <h4 className="resume-h4">Programming tutor</h4>
                        <h5 className="resume-h5">2019-2020</h5>
                        <p className="resume-p">
                            I tutored an individual through the Harvard course CS50, which includes Flask, SQL, C, JavaScript, and more,
                            as a private tutor. For the final group project we developed an anti keylogger for GNU.
                        </p>
                    </div>
                </div>
                <h3 className="resume-h3">EDUCATION AND TRAINING</h3>
                <div className="right-column__training">
                    <div className="right-column__training-item">
                        <h4 className="resume-h4">&lt;&#47;salt&gt; Full Stack JavaScript</h4>
                        <h5 className="resume-h5">2022</h5>
                        <p className="resume-p">
                            I completed the full stack JavaScript program at &lt;&#47;salt&gt;, which is an intensive period of training that around 
                            30 out of 1500 applicants get accepted to, and which not all 30 always make it through. In the program, trainees work in
                            teams using mob programming on the weekdays, and complete individual programming tests on the weekends.
                        </p>
                    </div>
                    <div className="right-column__training-item">
                        <h4 className="resume-h4">GY courses</h4>
                        <h5 className="resume-h5">2018-2019</h5>
                        <p className="resume-p">
                            I completed the courses web development 1 and 2, web server programming 1 and 2, and programming 1 and 2 at Hermods.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
}

export default Resume;