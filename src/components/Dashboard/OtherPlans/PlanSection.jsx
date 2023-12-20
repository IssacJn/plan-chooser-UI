import Button from "../Button";
import styles from "./PlanSection.module.css";
import SpecsButton from "./SpecsButton";

function PlanSection({ buttonContent, type, description, color }) {
	return (
		<div className={styles.container}>
			<SpecsButton buttonContent={buttonContent} color={color} />
			<h1 className={styles.heading}>{type}</h1>
			<p className={styles.description}>{description}</p>
			<Button color={color} />
		</div>
	);
}

export default PlanSection;
