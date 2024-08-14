import React, { useRef, useState, useEffect, useCallback } from 'react';
import styles from './header.module.css';
import ContactUs from '../pages/ContactUs';
import MobileNavbar from './MobileNavbar';

const Header = ({ isOpen, setIsOpen }) => {
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 1080px)').matches
	);
	const [isSmallerMobile, setIsSmallerMobile] = useState(
		window.matchMedia('(max-width: 768px)').matches
	);
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [scrollPos, setScrollPos] = useState(scrollY);
	const logoTextRef = useRef();
	const whiteBgRef = useRef();
	const mhRef = useRef();

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (isSmallerMobile) {
			const translation = scrollPos * 2; // 100px sınır koyabilirsiniz
			console.log(translation);
			if (translation > 300) {
				mhRef.current.style.backgroundColor =
					'rgba(255, 255, 255, 0.5)';
			} else {
				mhRef.current.style.backgroundColor = '';
			}
		}
		if (!isSmallerMobile && logoTextRef.current) {
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
			{' '}
			{isSmallerMobile && (
				<div
					className={styles.mobileHeader}
					ref={mhRef}
				></div>
			)}
			<div className={styles.header}>
				<a
					href='/'
					className={styles.logoContainer}
				>
					<div className={styles.logoImg}>
						{!isSmallerMobile && (
							<div
								ref={whiteBgRef}
								className={styles.whiteBackground}
							></div>
						)}
						<img
							src='https://brenzystudios.com/assets/Logo/png/logoOnly.png'
							alt='Brenzy Studios Logo'
						/>
					</div>
					<div
						className={styles.logoText}
						ref={logoTextRef}
					>
						<span>brenzy</span>studios
					</div>
				</a>
				<div
					className={styles.contactUs}
					onClick={openModal}
				>
					contact us
				</div>
				<div
					className={styles.mobileMenu}
					onClick={() => {
						document.body.classList.add('modal-open');
						setNavbarOpen(true);
					}}
				>
					<svg
						xmlns='https://www.w3.org/2000/svg'
						version='1.1'
						xmlns:xlink='https://www.w3.org/1999/xlink'
						width='42'
						height='42'
						x='0'
						y='0'
						viewBox='0 0 32 32'
						xml:space='preserve'
						class=''
					>
						<g>
							<g data-name='Layer 2'>
								<path
									d='M27 17H5a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2zM27 10H5a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2zM27 24H5a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2z'
									fill='#000000'
									opacity='1'
									data-original='#000000'
									class=''
								></path>
							</g>
						</g>
					</svg>
				</div>
			</div>
			<ContactUs {...{ isOpen, closeModal }} />
			{isMobile && navbarOpen && (
				<MobileNavbar
					closeModal={() => {
						document.body.classList.remove('modal-open');
						setNavbarOpen(false);
					}}
				/>
			)}
		</>
	);
};

export default Header;
