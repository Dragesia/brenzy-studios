import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from './cm.module.css';
import emailjs from '@emailjs/browser';

const ContactUsMobile = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSent, setIsSent] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (!window.matchMedia('(max-width: 1080px)').matches) {
			navigate('/');
		}
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

		if (
			name.length &&
			email.includes('@') &&
			email.includes('.') &&
			email.length &&
			message.length
		) {
			await emailjs.send('default_service', 'template_set8aqh', {
				from_name: name,
				message: message,
				reply_to: email,
			});
			setEmail('');
			setName('');
			setMessage('');

			setIsSent(true);
		}
	};

	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.header}>CONTACT US</div>
			<div className={styles.contactUsContent}>
				<div className={styles.formContainer}>
					<form onSubmit={handleSubmit}>
						<label htmlFor='name'>
							Your name
							<input
								type='text'
								name='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</label>
						<label htmlFor='email'>
							Your email
							<input
								type='text'
								name='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
						<label htmlFor='message'>
							Your message
							<textarea
								name='message'
								rows={5}
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							></textarea>
						</label>
						<button className={styles.submitBtn}>Submit</button>
						{isSent && (
							<div className={styles.success}>
								Your message has been sent.
							</div>
						)}
					</form>
				</div>
				<div className={styles.socialContainer}>
					<div className={styles.socialText}>
						If you have any questions about our services or working
						with us, please contact us. We're here to help
					</div>
					<div className={styles.socialInfo}>
						<div className={styles.infoCard}>
							<div className={styles.infoImg}>
								<img
									src='https://www.brenzystudios.com/assets/Icons/Email.png'
									alt='Email Image'
								/>
							</div>
							<a
								href='mailto:info@brenzystudios.com'
								className={styles.infoText}
							>
								info@brenzystudios.com
							</a>
						</div>
						<div className={styles.infoCard}>
							<div className={styles.infoImg}>
								<img
									src='https://www.brenzystudios.com/assets/Icons/Location.png'
									alt='Location Image'
								/>
							</div>
							<div className={styles.infoText}>
								Istanbul, Turkey
							</div>
						</div>
					</div>
					<div className={styles.socials}>
						<a
							href='#'
							target='_blank'
						>
							<img
								src='https://www.brenzystudios.com/assets/Icons/discordBlack.png'
								alt='Discord Icon'
							/>
						</a>
						<a
							href='#'
							target='_blank'
						>
							<img
								src='https://www.brenzystudios.com/assets/Icons/LinkedinBlack.png'
								alt='Linkedin Icon'
							/>
						</a>
						<a
							href='#'
							target='_blank'
						>
							<img
								src='https://www.brenzystudios.com/assets/Icons/TwitterBlack.png'
								alt='Twitter Icon'
							/>
						</a>
						<a
							href='#'
							target='_blank'
						>
							<img
								src='https://www.brenzystudios.com/assets/Icons/YoutubeBlack.png'
								alt='Youtube Icon'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUsMobile;
