import styles from "./Logo.module.css";

function Logo() {
	return (
		<div className={styles.logoContainer}>
			<img src='/logo.png' className={styles.logo} />
		</div>
	);
}

export default Logo;
