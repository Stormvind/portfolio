import './App.css';
import Bio from './pages/Bio/Bio';
import Projects from './pages/Projects/Projects';
import {Routes, Route} from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Bio />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<Bio />} />
			</Routes>
		</>
	);
}

export default App;
