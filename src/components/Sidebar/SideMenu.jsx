import MenuItem from "./MenuItem";

import styles from "./SideMenu.module.css";

function SideMenu() {
	return (
		<div className={styles.sideMenuContainer}>
			<MenuItem />
			<MenuItem />
			<MenuItem />
			<MenuItem />
			<MenuItem />
		</div>
	);
}

export default SideMenu;
