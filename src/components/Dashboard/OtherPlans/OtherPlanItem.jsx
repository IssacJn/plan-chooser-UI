import styles from "./OtherPlanItem.module.css";
import PlanSection from "./PlanSection";
import PlanDetailsSection from "../PlanDetailsSection";

function OtherPlanItem({
	buttonContent,
	type,
	description,
	users,
	storage,
	color,
}) {
	return (
		<div className={styles.otherPlanItemContainer}>
			<PlanSection
				buttonContent={buttonContent}
				type={type}
				description={description}
				color={color}
			/>
			<PlanDetailsSection type={type} users={users} storage={storage} />
		</div>
	);
}

export default OtherPlanItem;
