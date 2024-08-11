import React from 'react';
import styles from './stats.module.css';

const YT_API_KEY = 'AIzaSyD-CmcctZ9lFB98bMGyBbLvyJfJz1MftHA';
const YT_ID = 'UCjLuDK6daotQxTcjdLsyUzQ';
const START_DATE = '2022-07-30T00:00:00Z';

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
