import React, { useState } from 'react';
import styles from './footer.module.css';

const Footer = () => {
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 1296px)').matches
	);
	return (
		<div className={styles.footer}>
			<div className={styles.innerFooter}>
				<div className={styles.left}>
					<div className={styles.logoContainer}>
						<img
							src='/src/assets/Logo/png/LogoWhite.png'
							alt='White Logo'
						/>
						<div className={styles.logoText}>
							<span>brenzy</span>studios
						</div>
					</div>
					<div className={styles.socials}>
						<a href='#'>
							<img
								src='/src/assets/Icons/discordWhite.png'
								alt='Discord Icon'
							/>
						</a>
						<a href='#'>
							<img
								src='/src/assets/Icons/LinkedinWhite.png'
								alt='Linkedin Icon'
							/>
						</a>
						<a href='#'>
							<img
								src='/src/assets/Icons/TwitterWhite.png'
								alt='Twitter Icon'
							/>
						</a>
						<a href='#'>
							<img
								src='/src/assets/Icons/YoutubeWhite.png'
								alt='Youtube Icon'
							/>
						</a>
					</div>
				</div>
				{!isMobile && (
					<div className={styles.mid}>
						<div className={styles.links}>
							<a href='#'>Privacy Policy</a>
							<a href='#'>Copyright Policy</a>
							<a href='#'>Terms of Service</a>
						</div>
					</div>
				)}
				<div className={styles.right}>
					<div className={styles.subscribe}>
						<div className={styles.subscribeHeader}>
							Get in touch with us.
						</div>
						<input
							type='text'
							placeholder='Email'
						/>
						<div className={styles.contactUs}>Contact us</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
