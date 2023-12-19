import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./MainContent.module.css";

function MainContent() {
	return (
		<section className={styles.mainSectionContainer}>
			<Sidebar />
			<Dashboard />
		</section>
	);
}

export default MainContent;
