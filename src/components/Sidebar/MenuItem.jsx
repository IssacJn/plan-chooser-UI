import styles from "./MenuItem.module.css";

function MenuItem({ icon, name }) {
	return (
		<div className={styles.itemContainer}>
			<img src={icon} alt='icon' />
			<p>{name}</p>
		</div>
	);
}

export default MenuItem;
