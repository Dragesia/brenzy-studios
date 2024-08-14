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
import { Route, Routes } from 'react-router-dom';
import ContactUsMobile from './pages/ContactUsMobile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofService from './pages/TermsofService';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Routes>
			<Route
				path='/'
				element={
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
				}
			/>
			<Route
				path='/contact-us'
				element={<ContactUsMobile />}
			/>
			<Route
				path='/privacy-policy'
				element={<PrivacyPolicy {...{ isOpen, setIsOpen }} />}
			/>
			<Route
				path='/terms-of-service'
				element={<TermsofService {...{ isOpen, setIsOpen }} />}
			/>
		</Routes>
	);
}

export default App;
