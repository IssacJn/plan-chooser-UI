import styles from "./CompanyTitle.module.css";

function CompanyTitle() {
	return (
		<div className={styles.companyTitleContainer}>
			<div className={styles.companyTitle}>
				<img
					className={styles.companyLogo}
					src='/company.png'
					alt='companyLogo'
				/>
				<p className={styles.companyName}>XYX Enterprises Pvt. Ltd</p>
			</div>
			<div className={styles.arrowContainer}>
				<img
					className={styles.downArrow}
					src='/down-arrow.svg'
					alt='arrow'
				/>
			</div>
		</div>
	);
}

export default CompanyTitle;
