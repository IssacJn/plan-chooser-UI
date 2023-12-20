import OtherPlanItem from "./OtherPlanItem";
import styles from "./OtherPlans.module.css";

function OtherPlan() {
	const starterDescription =
		"The quickest and easiest way to try Protocols with basic functionalities";
	const enterpriseDescription =
		"Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success";

	return (
		<div className={styles.OtherPlansContainer}>
			<OtherPlanItem
				buttonContent='Free Starter'
				type='Free Starter'
				description={starterDescription}
				users={8}
				storage={3}
				color='rgb(195,251,140)'
			/>
			<OtherPlanItem
				buttonContent='Let&lsquo;s Connect'
				type='Enterprise Plan'
				description={enterpriseDescription}
				users={75}
				color='rgb(139,186,250)'
			/>
		</div>
	);
}

export default OtherPlan;
