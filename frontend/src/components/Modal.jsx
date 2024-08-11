import React from 'react';
import styles from './modal.module.css';

const Modal = ({ children, isOpen, closeModal }) => {
	return (
		<div
			onClick={closeModal}
			className={isOpen ? styles.openModal : styles.closeModal}
		>
			{children}
		</div>
	);
};

export default Modal;
