import OtherPlanItem from "./OtherPlanItem";
import styles from "./OtherPlans.module.css";

function OtherPlan() {
	return (
		<div className={styles.OtherPlansContainer}>
			<OtherPlanItem />
			<OtherPlanItem />
		</div>
	);
}

export default OtherPlan;
