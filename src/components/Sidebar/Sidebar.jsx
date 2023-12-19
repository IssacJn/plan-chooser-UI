import LogoutTab from "./LogoutTab";
import Profile from "./Profile";
import SideMenu from "./SideMenu";
import styles from "./Sidebar.module.css";

function Sidebar() {
	return (
		<div className={styles.sidebarContainer}>
			<Profile />
			<SideMenu />
			<LogoutTab />
		</div>
	);
}

export default Sidebar;
