import styles from "./LogoutTab.module.css";

function LogoutTab() {
	return (
		<div className={styles.logoutContainer}>
			<p>Logout</p>
			<img src='/logout.png' />
		</div>
	);
}

export default LogoutTab;
