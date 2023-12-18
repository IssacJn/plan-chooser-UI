import CompanyTitle from "./CompanyTitle";
import Logo from "./Logo";

import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.headerContainer}>
			<Logo />
			<CompanyTitle />
		</header>
	);
}

export default Header;
