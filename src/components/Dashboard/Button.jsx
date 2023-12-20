import styles from "./Button.module.css";

function Button({ color }) {
	return (
		<button className={styles.button} style={{ backgroundColor: color }}>
			Get Started <span className={styles.arrow}>&rarr;</span>
		</button>
	);
}

export default Button;
