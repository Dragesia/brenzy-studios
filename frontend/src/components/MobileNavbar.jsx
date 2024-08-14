import React from 'react';
import styles from './mn.module.css';

const MobileNavbar = ({ closeModal }) => {
	return (
		<div className={styles.container}>
			<div
				className={styles.close}
				onClick={closeModal}
			>
				<img
					src='https://brenzystudios.com/assets/close.png'
					alt='close modal'
				/>
			</div>
			<div className={styles.navbar}>
				<a
					href='/#home'
					onClick={closeModal}
				>
					Home
				</a>
				<a
					href='/#works'
					onClick={closeModal}
				>
					Works
				</a>
				<a
					href='/#services'
					onClick={closeModal}
				>
					Services
				</a>
				<a
					href='/contact-us'
					onClick={closeModal}
				>
					Contact Us
				</a>
			</div>
		</div>
	);
};

export default MobileNavbar;
