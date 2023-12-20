import styles from "./Footer.module.css";

function Footer() {
	return (
		<div className={styles.footer}>
			<span>
				*some unique features are provided as add-ons with individual
				plans for each features
			</span>

			<div className={styles.plusIconContainer}>
				<img
					className={styles.plusIcon}
					src='/plusIcon.png'
					alt='plusIcon'
				/>
			</div>
		</div>
	);
}

export default Footer;
