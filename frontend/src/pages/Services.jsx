import React, { useState } from 'react';
import styles from './services.module.css';
import { useNavigate } from 'react-router-dom';

const Services = ({ setIsOpen }) => {
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 1296px)').matches
	);
	const [isSmallerMobile, setIsSmallerMobile] = useState(
		window.matchMedia('(max-width: 1080px)').matches
	);

	const navigate = useNavigate();

	const openModal = () => {
		if (isSmallerMobile) {
			navigate('/contact-us');
			window.scrollTo(0, 0);
		} else {
			setIsOpen(true);
			document.body.classList.add('modal-open');
		}
	};

	return (
		<div
			className={styles.services}
			id='services'
		>
			<div className={styles.header}>our services</div>
			<div className={styles.innerServices}>
				<div
					className={styles.serviceCard}
					onClick={openModal}
				>
					<div className={styles.cardIcon}>
						<img
							src='https://brenzystudios.com/assets/Icons/long.png'
							alt='Long Form Content Icon'
						/>
					</div>
					<div className={styles.cardInfo}>
						<div className={styles.cardHeader}>
							Long Form Content
						</div>
						<div className={styles.cardText}>
							Enhance your long form content with us
						</div>
					</div>
				</div>
				<div
					className={styles.serviceCard}
					onClick={openModal}
				>
					<div className={styles.cardIcon}>
						<img
							src='https://brenzystudios.com/assets/Icons/short.png'
							alt='Short Form Content Icon'
						/>
					</div>
					<div className={styles.cardInfo}>
						<div className={styles.cardHeader}>
							Short Form Content
						</div>
						<div className={styles.cardText}>
							Never lose attention of your viewers with our short
							form edits
						</div>
					</div>
				</div>
				<div
					className={styles.serviceCard}
					onClick={openModal}
				>
					<div className={styles.cardIcon}>
						<img
							src='https://brenzystudios.com/assets/Icons/longshort.png'
							alt='Long and Short Form Content Icon'
							className={styles.lsIcon}
						/>
					</div>
					<div className={styles.cardInfo}>
						<div className={styles.cardHeader}>
							Long & Short Form Content
						</div>
						<div className={styles.cardText}>
							Let us take care of your both short and long format
							content
						</div>
					</div>
				</div>
				<div
					className={styles.serviceCard}
					onClick={openModal}
				>
					<div className={styles.cardIcon}>
						<img
							src='https://brenzystudios.com/assets/Icons/management.png'
							alt='Channel Management Icon'
						/>
					</div>
					<div className={styles.cardInfo}>
						<div className={styles.cardHeader}>
							Channel Management
						</div>
						<div className={styles.cardText}>
							We will manage your thumbnails, video titles, SEO,
							videos etc.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
