import Button from "./Button";
import styles from "./PlanPriceSection.module.css";

function PlanPriceSection({ type, prevPrice, price, color }) {
	return (
		<div className={styles.container}>
			<h1>{type}</h1>
			<p className={styles.previousPrice}>$ {prevPrice}/mo</p>
			<p className={styles.newPrice}>
				$ {price}
				<span>/mo</span>
			</p>
			<Button color={color} />
		</div>
	);
}

export default PlanPriceSection;
