import React, { useState } from 'react';
import styles from './works.module.css';

const isMobile = window.matchMedia('(max-width: 1296px)').matches;

const Works = () => {
	// const [isMobile, setIsMobile] = useState(
	// 	window.matchMedia('(max-width: 1296px)').matches
	// );
	const [slider, setSlider] = useState(0);

	const handlePrevSlide = () => {
		if (isMobile && slider < 1) setSlider(5);
		else if (!isMobile && slider < 1) setSlider(1);
		else setSlider(slider - 1);
	};

	const handleNextSlide = () => {
		if (isMobile && slider > 4) setSlider(0);
		else if (!isMobile && slider > 0) setSlider(0);
		else setSlider(slider + 1);
	};

	const handleVideoMouseEnter = (e) => {
		e.target.currentTime = 0;
		e.target.play();
	};
	const handleVideoMouseLeave = (e) => {
		e.target.currentTime = 0;
		e.target.pause();
	};
	return (
		<div
			className={styles.works}
			id='works'
		>
			<div className={styles.header}>look at some of our work</div>
			<div className={styles.innerWorks}>
				<div
					className={styles.sliderArrowLeft}
					onClick={handlePrevSlide}
				>
					<svg
						xmlns='https://www.w3.org/2000/svg'
						version='1.1'
						xmlns:xlink='https://www.w3.org/1999/xlink'
						width='27'
						height='27'
						x='0'
						y='0'
						viewBox='0 0 490.787 490.787'
						xml:space='preserve'
						class=''
					>
						<g>
							<path
								d='M362.671 490.787a10.663 10.663 0 0 1-7.552-3.115L120.452 253.006c-4.164-4.165-4.164-10.917 0-15.083L355.119 3.256c4.093-4.237 10.845-4.354 15.083-.262 4.237 4.093 4.354 10.845.262 15.083-.086.089-.173.176-.262.262L143.087 245.454l227.136 227.115c4.171 4.16 4.179 10.914.019 15.085a10.67 10.67 0 0 1-7.571 3.133z'
								fill='#f44336'
								data-original='#f44336'
							></path>
							<path
								d='M362.671 490.787a10.663 10.663 0 0 1-7.552-3.115L120.452 253.006c-4.164-4.165-4.164-10.917 0-15.083L355.119 3.256c4.093-4.237 10.845-4.354 15.083-.262 4.237 4.093 4.354 10.845.262 15.083-.086.089-.173.176-.262.262L143.087 245.454l227.136 227.115c4.171 4.16 4.179 10.914.019 15.085a10.67 10.67 0 0 1-7.571 3.133z'
								fill='#000000'
								opacity='1'
								data-original='#000000'
							></path>
						</g>
					</svg>
				</div>
				<div className={styles.videoSlider}>
					{!isMobile && slider == 0 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://youtube.com/azzapp'
									target='_blank'
								>
									Azzapp
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>

							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/RhJn40jTa8s'
							>
								<video
									src='https://brenzystudios.com/assets/videos/azzapp1.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/GCvqxWsHFHQ'
							>
								<video
									src='https://brenzystudios.com/assets/videos/azzapp2.mp4'
									muted
									playsinline
									controls='false'
									webkit-playsinline
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
								></video>
							</a>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/e--6I5UazlQ'
							>
								<video
									src='https://brenzystudios.com/assets/videos/azzapp3.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
					{!isMobile && slider == 1 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://www.youtube.com/@AloisNL'
									target='_blank'
								>
									AloisNL
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/i0nmMfvNMD0'
							>
								<video
									src='https://brenzystudios.com/assets/videos/alois1.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/UbIdfoJ2RUo'
							>
								<video
									src='https://brenzystudios.com/assets/videos/alois2.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://youtube.com/shorts/k2PK_pnmw2U'
							>
								<video
									src='https://brenzystudios.com/assets/videos/alois3.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
					{isMobile && slider == 0 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://www.youtube.com/@Azzapp'
									target='_blank'
								>
									Azzapp
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/RhJn40jTa8s'
							>
								<video
									src='https://brenzystudios.com/assets/videos/azzapp1.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
					{isMobile && slider == 1 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://www.youtube.com/@Azzapp'
									target='_blank'
								>
									Azzapp
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/RhJn40jTa8s'
							>
								<video
									src='https://brenzystudios.com/assets/videos/azzapp2.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
					{isMobile && slider == 2 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://www.youtube.com/@Azzapp'
									target='_blank'
								>
									Azzapp
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/RhJn40jTa8s'
							>
								<video
									src='https://brenzystudios.com/assets/videos/azzapp3.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
					{isMobile && slider == 3 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://www.youtube.com/@AloisNL'
									target='_blank'
								>
									AloisNL
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/RhJn40jTa8s'
							>
								<video
									src='https://brenzystudios.com/assets/videos/alois1.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
					{isMobile && slider == 4 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://www.youtube.com/@AloisNL'
									target='_blank'
								>
									AloisNL
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/RhJn40jTa8s'
							>
								<video
									src='https://brenzystudios.com/assets/videos/alois2.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
					{isMobile && slider == 5 && (
						<>
							<div className={styles.worksHeader}>
								<a
									href='https://www.youtube.com/@Azzapp'
									target='_blank'
								>
									AloisNL
									<img
										src='https://brenzystudios.com/assets/Icons/Youtube.png'
										alt='Youtube Icon'
									/>
								</a>
							</div>
							<a
								target='_blank'
								className={styles.videoContainer}
								href='https://www.youtube.com/shorts/RhJn40jTa8s'
							>
								<video
									src='https://brenzystudios.com/assets/videos/alois3.mp4'
									onMouseEnter={handleVideoMouseEnter}
									onMouseLeave={handleVideoMouseLeave}
									muted
									playsinline
									controls='false'
									webkit-playsinline
								></video>
							</a>
						</>
					)}
				</div>
				<div
					className={styles.sliderArrowRight}
					onClick={handleNextSlide}
				>
					<svg
						xmlns='https://www.w3.org/2000/svg'
						version='1.1'
						xmlns:xlink='https://www.w3.org/1999/xlink'
						width='27'
						height='27'
						x='0'
						y='0'
						viewBox='0 0 490.8 490.8'
						xml:space='preserve'
						class=''
					>
						<g>
							<path
								d='M135.685 3.128c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l227.115 227.136-227.136 227.115c-4.237 4.093-4.354 10.845-.262 15.083 4.093 4.237 10.845 4.354 15.083.262.089-.086.176-.173.262-.262l234.667-234.667c4.164-4.165 4.164-10.917 0-15.083L135.685 3.128z'
								fill='#f44336'
								data-original='#f44336'
							></path>
							<path
								d='M128.133 490.68a10.667 10.667 0 0 1-7.552-18.219l227.136-227.115L120.581 18.232c-4.171-4.171-4.171-10.933 0-15.104 4.171-4.171 10.933-4.171 15.104 0l234.667 234.667c4.164 4.165 4.164 10.917 0 15.083L135.685 487.544a10.663 10.663 0 0 1-7.552 3.136z'
								fill='#000000'
								opacity='1'
								data-original='#000000'
							></path>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Works;
