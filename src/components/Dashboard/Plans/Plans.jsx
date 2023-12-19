import PlanItem from "./PlanItem";
import styles from "./Plans.module.css";

function Plans() {
	return (
		<div className={styles.plansContainer}>
			<PlanItem />
			<PlanItem />
			<PlanItem />
		</div>
	);
}

export default Plans;
