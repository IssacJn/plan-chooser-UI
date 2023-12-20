import styles from "./Notification.module.css";

function Notification() {
	return (
		<div>
			<div className={styles.bellContaier}>
				<img
					className={styles.bellIcon}
					src='/bellIcon.png'
					alt='bell-icon'
				/>
			</div>
			<div className={styles.notCount}>3</div>
		</div>
	);
}

export default Notification;
