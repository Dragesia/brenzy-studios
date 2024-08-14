import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './home.module.css';

const Home = ({ isOpen }) => {
	const [isTablet, setIsTablet] = useState(
		window.matchMedia('(max-width: 1440px)').matches
	);
	const [isClicked, setIsClicked] = useState(false);
	const btRef = useRef();
	const lmRef = useRef();

	useEffect(() => {
		if (!isTablet) {
			btRef.current.querySelectorAll('div').forEach(wrapTextWithSpans);
			document.addEventListener('mousemove', handleMouseMove);

			window.addEventListener('scroll', handleScroll);
		}
	}, []);

	useEffect(() => {
		if (isClicked) {
			lmRef.current.removeEventListener('mouseleave', handleMouseLeave);
			document
				.querySelector('#works')
				.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isClicked]);

	function wrapTextWithSpans(element) {
		const text = element.innerText;
		element.innerHTML = '';
		for (const char of text) {
			const span = document.createElement('span');
			span.innerText = char;
			element.appendChild(span);
		}
	}

	const handleMouseMove = useCallback((e) => {
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
	});

	const handleMouseEnter = () => {
		if (!isClicked) {
			window.scrollTo(0, 130);
		}
	};

	const handleMouseLeave = useCallback(() => {
		if (!isClicked) {
			window.scrollTo(0, 0);
		}
	});

	const handleClick = (e) => {
		setIsClicked(true);
	};

	const handleScroll = () => {
		if (window.scrollY == 0) {
			setIsClicked(false);
		} else if (window.scrollY < 135) {
			lmRef.current.classList.remove('hiddenBtn');
		} else {
			lmRef.current.classList.add('hiddenBtn');
		}
	};
	return (
		<div
			className={styles.home}
			id='home'
		>
			<div className={styles.homeContent}>
				{!isTablet && (
					<>
						<div
							className={styles.boldText}
							ref={btRef}
						>
							<div className={styles.boldLine}>
								Let's&nbsp;build&nbsp;a&nbsp;brand
							</div>
							<div className={styles.boldLine}>
								together&nbsp;that
							</div>
							<div className={styles.boldLine}>
								you&nbsp;and&nbsp;your
							</div>
							<div className={styles.boldLine}>
								community&nbsp;will
							</div>
							<div className={styles.boldLine}>
								be&nbsp;proud&nbsp;of.
							</div>
						</div>
						<div className={styles.thinText}>
							<div className={styles.thinLine}>
								We are a digital media agency
							</div>
							<div className={styles.thinLine}>
								helping influencers,
							</div>
							<div className={styles.thinLine}>
								content creators, and brands
							</div>
							<div className={styles.thinLine}>
								create quality content suitable
							</div>
							<div className={styles.thinLine}>
								to their style.
							</div>
						</div>
					</>
				)}
				{isTablet && (
					<>
						<div className={styles.mobileText}>
							Let's build a brand together that <span>you</span>{' '}
							and <span>your community</span> will be proud of.
						</div>
					</>
				)}
			</div>
			<div
				className={styles.learnMore}
				onClick={handleClick}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				ref={lmRef}
			>
				learn more
			</div>
		</div>
	);
};

export default Home;
