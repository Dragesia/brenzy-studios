import React from 'react';
import styles from './aboutus.module.css';

const AboutUs = () => {
	return (
		<div
			className={styles.aboutUs}
			id='about-us'
		>
			<div className={styles.innerAboutUs}>
				<div className={styles.aboutUsText}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor gotune koydugumun alisi artik edit yap.
					Quis ipsum
				</div>
				<div className={styles.aboutUsIcon}>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
