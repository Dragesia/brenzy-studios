import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Works from './pages/Works';
import Stats from './pages/Stats';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Test from './pages/test/test';
import Footer from './components/Footer';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div id='main'>
			<Header {...{ isOpen, setIsOpen }} />
			<Sidebar />
			<Home {...{ isOpen }} />
			<Works />
			<Stats />
			<Services {...{ setIsOpen }} />
			{/* <AboutUs /> */}
			<Footer />
		</div>
	);
}

export default App;
