import styles from "./Dashboard.module.css";
import Footer from "./Footer/Footer";
import OtherPlans from "./OtherPlans/OtherPlans";
import PlanDurationSelector from "./PlanDurationSelector/PlanDurationSelector";
import Plans from "./Plans/Plans";

function Dashboard() {
	return (
		<div className={styles.dashboardContainer}>
			<h2 className={styles.heading}>
				Choose a plan that&lsquo;s just right for you !
			</h2>

			<PlanDurationSelector />

			<Plans />

			<OtherPlans />

			<Footer />
		</div>
	);
}

export default Dashboard;
