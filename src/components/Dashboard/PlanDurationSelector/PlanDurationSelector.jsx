import styles from "./PlanDurationSelector.module.css";

function PlanDurationSelector() {
	return (
		<div className={styles.planDurationSelectorContainer}>
			<div className={styles.planDurationSelector}>
				<div type='button' className={styles.planButton}>
					Monthly
				</div>
				<div type='button' className={styles.planButton}>
					Anually
				</div>
			</div>
		</div>
	);
}

export default PlanDurationSelector;
