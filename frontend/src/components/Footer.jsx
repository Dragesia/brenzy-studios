import React, { useState, useEffect } from 'react';
import styles from './footer.module.css';
import emailjs from '@emailjs/browser';

const Footer = () => {
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(max-width: 1296px)').matches
	);
	const [email, setEmail] = useState('');
	const [isSent, setIsSent] = useState();

	useEffect(() => {
		emailjs.init({
			publicKey: 'NFfCd9cv_gey0JOix',
			blockHeadless: true,
			limitRate: {
				id: 'app',
				throttle: 10000,
			},
		});
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email.includes('@') && email.includes('.') && email.length) {
			await emailjs.send('default_service', 'template_set8aqh', {
				from_name: email,
				message: 'No message',
				reply_to: email,
			});
			setEmail('');
			setIsSent(true);
		}
	};

	return (
		<div className={styles.footer}>
			<div className={styles.innerFooter}>
				<div className={styles.left}>
					<a
						href='/'
						className={styles.logoContainer}
					>
						<img
							src='https://brenzystudios.com/assets/Logo/png/LogoWhite.png'
							alt='White Logo'
						/>
						<div className={styles.logoText}>
							<span>brenzy</span>studios
						</div>
					</a>
					<div className={styles.socials}>
						<a href='#'>
							<img
								src='https://brenzystudios.com/assets/Icons/discordWhite.png'
								alt='Discord Icon'
							/>
						</a>
						<a href='#'>
							<img
								src='https://brenzystudios.com/assets/Icons/LinkedinWhite.png'
								alt='Linkedin Icon'
							/>
						</a>
						<a href='#'>
							<img
								src='https://brenzystudios.com/assets/Icons/TwitterWhite.png'
								alt='Twitter Icon'
							/>
						</a>
						<a href='#'>
							<img
								src='https://brenzystudios.com/assets/Icons/YoutubeWhite.png'
								alt='Youtube Icon'
							/>
						</a>
					</div>
				</div>
				{!isMobile && (
					<div className={styles.mid}>
						<div className={styles.links}>
							<a href='/privacy-policy'>Privacy Policy</a>
							<a href='/privacy-policy'>Copyright Policy</a>
							<a href='/terms-of-service'>Terms of Service</a>
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<div
							className={styles.contactUs}
							onClick={handleSubmit}
						>
							Contact us
						</div>
						{isSent && (
							<div className={styles.success}>
								Your message has been sent.
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
