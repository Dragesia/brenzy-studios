import React, { useEffect, useRef, useState } from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
	const [active, setActive] = useState('home');
	const [sections, setSections] = useState([]);
	const [hovered, setHovered] = useState('');
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 1296px)').matches
	);

	useEffect(() => {
		const homeEl = document.querySelector('#home');
		const worksEl = document.querySelector('#works');
		const servicesEl = document.querySelector('#services');
		// const aboutusEl = document.querySelector('#about-us');

		setSections([homeEl, worksEl, servicesEl]);
	}, []);

	useEffect(() => {
		if (sections.length) {
			window.onscroll = () => {
				sections.forEach((section) => {
					const sectionTop = section.offsetTop;
					if (scrollY >= sectionTop - 450) setActive(section.id);
				});
			};
		}
	}, [sections]);

	const handleMouseOver = (pageBtnName) => {
		setHovered(pageBtnName);
	};
	const handleMouseLeave = () => {
		setHovered('');
	};

	return (
		<div className={styles.sidebar}>
			<div className={styles.innerSidebar}>
				<a
					href='#home'
					className={active == 'home' ? styles.current : styles.navel}
				>
					<div
						className={
							active == 'home'
								? styles.innerCurrent
								: styles.innerNavel
						}
						onMouseOver={() => handleMouseOver('home')}
						onMouseLeave={() => handleMouseLeave()}
					>
						<div
							className={
								hovered == 'home'
									? `${styles.navelText}`
									: `${styles.navelText} hidden`
							}
						>
							Home
						</div>
					</div>
				</a>
				<a
					href='#works'
					className={
						active == 'works' ? styles.current : styles.navel
					}
				>
					<div
						className={
							active == 'works'
								? styles.innerCurrent
								: styles.innerNavel
						}
						onMouseOver={() => handleMouseOver('works')}
						onMouseLeave={() => handleMouseLeave()}
					>
						<div
							className={
								hovered == 'works'
									? `${styles.navelText}`
									: `${styles.navelText} hidden`
							}
						>
							Works
						</div>
					</div>
				</a>
				<a
					href='#services'
					className={
						active == 'services' ? styles.current : styles.navel
					}
				>
					<div
						className={
							active == 'services'
								? styles.innerCurrent
								: styles.innerNavel
						}
						onMouseOver={() => handleMouseOver('offers')}
						onMouseLeave={() => handleMouseLeave()}
					>
						<div
							className={
								hovered == 'offers'
									? `${styles.navelText}`
									: `${styles.navelText} hidden`
							}
						>
							Services
						</div>
					</div>
				</a>
				{/* <a
					href='#about-us'
					className={
						active == 'about-us' ? styles.current : styles.navel
					}
				>
					<div
						className={
							active == 'about-us'
								? styles.innerCurrent
								: styles.innerNavel
						}
						onMouseOver={() => handleMouseOver('aboutUs')}
						onMouseLeave={() => handleMouseLeave()}
					>
						<div
							className={
								hovered == 'aboutUs'
									? `${styles.navelText}`
									: `${styles.navelText} hidden`
							}
						>
							About Us
						</div>
					</div>
				</a> */}
			</div>
		</div>
	);
};

export default Sidebar;
