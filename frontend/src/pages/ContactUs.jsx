import React, { useState } from 'react';
import styles from './contactus.module.css';
import Modal from '../components/Modal';

const ContactUs = ({ isOpen, closeModal }) => {
	const handleClick = (e) => e.stopPropagation();

	return (
		<Modal {...{ isOpen, closeModal }}>
			<div
				className={styles.contactUsModal}
				onClick={handleClick}
			>
				<div className={styles.innerContactUs}>
					<div
						className={styles.close}
						onClick={closeModal}
					>
						<img
							src='/src/assets/close.png'
							alt='close modal'
						/>
					</div>
					<div className={styles.header}>CONTACT US</div>
					<div className={styles.contactUsContent}>
						<div className={styles.formContainer}>
							<form action='#'>
								<label htmlFor='name'>
									Your name
									<input
										type='text'
										name='name'
									/>
								</label>
								<label htmlFor='email'>
									Your email
									<input
										type='text'
										name='email'
									/>
								</label>
								<label htmlFor='message'>
									Your message
									<textarea
										name='message'
										rows={5}
									></textarea>
								</label>
								<button className={styles.submitBtn}>
									Submit
								</button>
							</form>
						</div>
						<div className={styles.socialContainer}>
							<div className={styles.socialText}>
								If you have any questions about us or our
								services, please contact us. We're here to help
							</div>
							<div className={styles.socialInfo}>
								<div className={styles.infoCard}>
									<div className={styles.infoImg}>
										<img
											src='/src/assets/Icons/Phone.png'
											alt='Phone Image'
										/>
									</div>
									<a
										href='tel:905055055555'
										className={styles.infoText}
									>
										+90 505 505 5555
									</a>
								</div>
								<div className={styles.infoCard}>
									<div className={styles.infoImg}>
										<img
											src='/src/assets/Icons/Email.png'
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
											src='/src/assets/Icons/Location.png'
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
										src='/src/assets/Icons/discordBlack.png'
										alt='Discord Icon'
									/>
								</a>
								<a
									href='#'
									target='_blank'
								>
									<img
										src='/src/assets/Icons/LinkedinBlack.png'
										alt='Linkedin Icon'
									/>
								</a>
								<a
									href='#'
									target='_blank'
								>
									<img
										src='/src/assets/Icons/TwitterBlack.png'
										alt='Twitter Icon'
									/>
								</a>
								<a
									href='#'
									target='_blank'
								>
									<img
										src='/src/assets/Icons/YoutubeBlack.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ContactUs;
