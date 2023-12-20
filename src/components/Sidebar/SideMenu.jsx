import MenuItem from "./MenuItem";

import styles from "./SideMenu.module.css";

function SideMenu() {
	return (
		<aside className={styles.sideMenuContainer}>
			<MenuItem icon='/dashboardIcon.png' name='Dashboard' />
			<MenuItem icon='/perksIcon.png' name='Perks' />
			<MenuItem icon='/addonIcon.png' name='Addons' />
			<MenuItem icon='/faqIcon.png' name='FAQ' />
			<MenuItem icon='/supportIcon.png' name='Support' />
		</aside>
	);
}

export default SideMenu;
