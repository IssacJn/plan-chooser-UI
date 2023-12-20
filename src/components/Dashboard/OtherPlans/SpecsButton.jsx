import styles from "./SpecsButton.module.css";

function SpecsButton({ color }) {
	return (
		<button className={styles.button} style={{ backgroundColor: color }}>
			Free Forever
		</button>
	);
}

export default SpecsButton;
