import PlanDetailsSection from "../PlanDetailsSection";
import PlanPriceSection from "../PlanPriceSection";
import styles from "./PlanItem.module.css";

function PlanItem({ type, prevPrice, price, users, storage, color }) {
	return (
		<div className={styles.planItemContainer}>
			<PlanPriceSection
				type={type}
				prevPrice={prevPrice}
				price={price}
				color={color}
			/>

			<hr className={styles.sectionDivider}></hr>

			<PlanDetailsSection
				type={type}
				users={users}
				storage={storage}
				color={color}
			/>
		</div>
	);
}

export default PlanItem;
