import React, { useRef, useEffect } from 'react';
import './Home.css'; // Make sure to import your CSS

const Home = () => {
	const btRef = useRef();

	useEffect(() => {
		btRef.current.querySelectorAll('div').forEach(wrapTextWithSpans);

		const handleMouseMove = (e) => {
			const spans = btRef.current.querySelectorAll('span');
			spans.forEach((span) => {
				const rect = span.getBoundingClientRect();
				const spanCenterX = rect.left + rect.width / 2;
				const spanCenterY = rect.top + rect.height / 2;
				const distance = Math.hypot(
					e.clientX - spanCenterX,
					e.clientY - spanCenterY
				);
				const maxDistance = 250; // Maximum distance for effect
				const weights = [
					1000, 900, 800, 700, 600, 500, 400, 300, 200, 100,
				]; // Font weights
				const scales = [
					2, 1.9, 1.8, 1.7, 1.6, 1.5, 1.4, 1.3, 1.2, 1.1, 1,
				]; // Font scales

				let fontWeight, scale;
				if (distance < maxDistance) {
					const weightIndex = Math.floor(
						(distance / maxDistance) * (weights.length - 1)
					);
					fontWeight = weights[weightIndex];
					scale = scales[weightIndex];
				} else {
					fontWeight = weights[weights.length - 1];
					scale = scales[scales.length - 1];
				}

				span.style.fontWeight = fontWeight;
				span.style.fontStretch = `${scale * 300}%`;
			});
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	const wrapTextWithSpans = (element) => {
		const text = element.innerText;
		element.innerHTML = '';
		for (const char of text) {
			const span = document.createElement('span');
			span.innerText = char;
			element.appendChild(span);
		}
	};

	return (
		<div className='home'>
			<div className='homeContent'>
				<div
					className='boldText'
					ref={btRef}
				>
					<div className='boldLine'>Let's build a brand</div>
					<div className='boldLine'>together that</div>
					<div className='boldLine'>you and your</div>
					<div className='boldLine'>community will</div>
					<div className='boldLine'>be proud of.</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
