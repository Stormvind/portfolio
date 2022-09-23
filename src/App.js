import './App.css';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import {Routes, Route} from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Resume />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<Resume />} />
			</Routes>
		</>
	);
}

export default App;
