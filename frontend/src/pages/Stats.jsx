import React from 'react';
import styles from './stats.module.css';

const Stats = () => {
	return (
		<div className={styles.stats}>
			<div className={styles.innerStats}>
				<div className={styles.statContainer}>
					<div className={styles.stat}>
						<div className={styles.statHeader}>total views</div>
						<div className={styles.statText}>
							183.1
							<span>m</span>
						</div>
					</div>
				</div>
				<div className={styles.statContainer}>
					<div className={styles.stat}>
						<div className={styles.statHeader}>subs gained</div>
						<div className={styles.statText}>
							115.8
							<span>k</span>
						</div>
					</div>
				</div>
				<div className={styles.statContainer}>
					<div className={styles.stat}>
						<div className={styles.statHeader}>total likes</div>
						<div className={styles.statText}>
							10.3
							<span>m</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
