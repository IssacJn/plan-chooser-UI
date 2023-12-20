import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./MainContent.module.css";
import Notification from "./Notification";

function MainContent() {
	return (
		<section className={styles.mainSectionContainer}>
			<Sidebar />
			<Dashboard />
			<Notification />
		</section>
	);
}

export default MainContent;
