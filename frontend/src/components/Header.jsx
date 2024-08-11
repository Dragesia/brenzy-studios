import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './header.module.css';
import ContactUs from '../pages/ContactUs';

const Header = ({ isOpen, setIsOpen }) => {
	const [scrollPos, setScrollPos] = useState(scrollY);
	const logoTextRef = useRef();
	const whiteBgRef = useRef();

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (logoTextRef.current) {
			// Calculate translation based on scrollY value
			const translation = Math.min(scrollPos * 1.5, 300); // 100px sınır koyabilirsiniz
			logoTextRef.current.style.transform = `translateX(-${translation}px)`;
			if (translation == 300) {
				whiteBgRef.current.style.display = 'none';
			} else {
				whiteBgRef.current.style.display = 'block';
			}
		}
	}, [scrollPos]);

	const handleScroll = () => {
		// Debouncing
		// clearTimeout(window.scrollTimeout);
		// window.scrollTimeout = setTimeout(() => {
		// if (window.scrollY < 300) {
		setScrollPos(window.scrollY);
		// }
		// }, 0);
	};

	const openModal = () => {
		setIsOpen(true);
		document.body.classList.add('modal-open');
	};
	const closeModal = () => {
		setIsOpen(false);
		document.body.classList.remove('modal-open');
	};

	return (
		<>
			<div className={styles.header}>
				<div className={styles.logoContainer}>
					<div className={styles.logoImg}>
						<div
							ref={whiteBgRef}
							className={styles.whiteBackground}
						></div>
						<img
							src='/src/assets/Logo/png/logoOnly.png'
							alt='Brenzy Studios Logo'
						/>
					</div>
					<div
						className={styles.logoText}
						ref={logoTextRef}
					>
						<span>brenzy</span>studios
					</div>
				</div>
				<div
					className={styles.contactUs}
					onClick={openModal}
				>
					contact us
				</div>
			</div>
			<ContactUs {...{ isOpen, closeModal }} />
		</>
	);
};

export default Header;
