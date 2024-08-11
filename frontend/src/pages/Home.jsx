import React, { useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

const Home = ({ isOpen }) => {
	const btRef = useRef();
	const lmRef = useRef();

	useEffect(() => {
		btRef.current.querySelectorAll('div').forEach(wrapTextWithSpans);
		document.addEventListener('mousemove', handleMouseMove);

		window.addEventListener('scroll', () => {
			if (window.scrollY === 0) {
				lmRef.current.classList.remove('hiddenBtn');
			} else if (window.scrollY > 25) {
				// Adjust this value to your desired scroll position
				lmRef.current.classList.add('hiddenBtn');
			}
		});
	}, []);

	useEffect(() => {
		if (isOpen) document.removeEventListener('mousemove', handleMouseMove);
		else document.addEventListener('mousemove', handleMouseMove);
	}, [isOpen]);

	function slowScrollTo(targetY, duration = 2000) {
		const start = window.scrollY;
		const distance = targetY - start;
		let startTime = null;

		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, start, distance, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		}

		function ease(t, b, c, d) {
			t /= d / 2;
			if (t < 1) return (c / 2) * t * t + b;
			t--;
			return (-c / 2) * (t * (t - 2) - 1) + b;
		}

		requestAnimationFrame(animation);
	}

	function wrapTextWithSpans(element) {
		const text = element.innerText;
		element.innerHTML = '';
		for (const char of text) {
			const span = document.createElement('span');
			span.innerText = char;
			element.appendChild(span);
		}
	}

	function handleMouseMove(e) {
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		const spans = btRef.current.querySelectorAll('span');

		spans.forEach((span) => {
			const rect = span.getBoundingClientRect();
			const spanX = rect.left + window.scrollX;
			const spanY = rect.top + window.scrollY;
			const distance = Math.sqrt(
				Math.pow(mouseX - spanX, 2) + Math.pow(mouseY - spanY, 2)
			);

			const maxDistance = 250;

			const minWeight = 400;
			const maxWeight = 900;
			let fontWeight = minWeight;

			const minStretch = 75;
			const maxStretch = 100;
			let fontStretch = minStretch;

			if (distance <= maxDistance) {
				fontWeight =
					maxWeight -
					distance * ((maxWeight - minWeight) / maxDistance);
				fontStretch =
					maxStretch -
					distance * ((maxStretch - minStretch) / maxDistance);
			}

			span.style.fontWeight = fontWeight;
			span.style.fontStretch = fontStretch + '%';
		});
	}

	return (
		<div
			className={styles.home}
			id='home'
		>
			<div className={styles.homeContent}>
				<div
					className={styles.boldText}
					ref={btRef}
				>
					<div className={styles.boldLine}>
						Let's&nbsp;build&nbsp;a&nbsp;brand
					</div>
					<div className={styles.boldLine}>together&nbsp;that</div>
					<div className={styles.boldLine}>
						you&nbsp;and&nbsp;your
					</div>
					<div className={styles.boldLine}>community&nbsp;will</div>
					<div className={styles.boldLine}>
						be&nbsp;proud&nbsp;of.
					</div>
				</div>
				<div className={styles.thinText}>
					<div className={styles.thinLine}>
						We are a digital media agency
					</div>
					<div className={styles.thinLine}>helping influencers,</div>
					<div className={styles.thinLine}>
						content creators, and brands
					</div>
					<div className={styles.thinLine}>
						create quality content suitable
					</div>
					<div className={styles.thinLine}>to their style.</div>
				</div>
			</div>
			<div
				className={styles.learnMore}
				onMouseEnter={() => slowScrollTo(130, 1000)}
				ref={lmRef}
			>
				learn more
			</div>
		</div>
	);
};

export default Home;
