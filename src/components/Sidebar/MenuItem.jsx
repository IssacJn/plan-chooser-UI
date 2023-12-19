import styles from "./MenuItem.module.css";

function MenuItem() {
	return (
		<div className={styles.itemContainer}>
			<img src='/dashboardIcon.png' />
			<p>Dashboard</p>
		</div>
	);
}

export default MenuItem;
