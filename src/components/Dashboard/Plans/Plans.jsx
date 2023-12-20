import PlanItem from "./PlanItem";
import styles from "./Plans.module.css";

function Plans() {
	return (
		<div className={styles.plansContainer}>
			<PlanItem
				type='Basic'
				prevPrice={89.99}
				price={9.99}
				users={25}
				storage={25}
				color='rgb(251, 227, 171)'
			/>
			<PlanItem
				type='Standard'
				prevPrice={189.99}
				price={99.99}
				users={50}
				storage={60}
				color='rgb(250,147,147)'
			/>
			<PlanItem
				type='Premium'
				prevPrice={389.99}
				price={199.99}
				users={75}
				storage={100}
				color='rgb(227,163,251)'
			/>
		</div>
	);
}

export default Plans;
