import React from 'react';
import styles from './services.module.css';

const Services = ({ setIsOpen }) => {
	const openModal = () => {
		setIsOpen(true);
		document.body.classList.add('modal-open');
	};

	return (
		<div
			className={styles.services}
			id='services'
		>
			<div className={styles.header}>our offers</div>
			<div className={styles.innerServices}>
				<div
					className={styles.serviceCard}
					onClick={openModal}
				>
					<div className={styles.cardIcon}>
						<img
							src='/src/assets/Icons/long.png'
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
							src='/src/assets/Icons/short.png'
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
							src='/src/assets/Icons/longshort.png'
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
							src='/src/assets/Icons/management.png'
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
