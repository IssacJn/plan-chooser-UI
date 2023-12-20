import styles from "./PlanDetailsSection.module.css";

function PlanDetailsSection({ type, users, storage, color }) {
	let otherDetails;
	if (type === "Free Starter") {
		otherDetails =
			"Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included";
	} else if (type === "Enterprise Plan") {
		otherDetails = "Customization of all other features";
	}

	let isExpBtn, isTick;
	if (type === "Enterprise Plan") {
		isExpBtn = false;
		isTick = true;
	} else if (type === "Free Starter") {
		isExpBtn = false;
		isTick = true;
	} else {
		isExpBtn = true;
		isTick = false;
	}

	return (
		<div
			className={styles.container}
			style={{
				paddingTop: `${type === "Enterprise Plan" ? "25px" : ""}`,
			}}
		>
			<p className={styles.questionPara}>What you&lsquo;ll get :</p>

			{type === "Enterprise Plan" && (
				<p>
					<img src='/personIcon.png' />
					<span>More than {users} Users</span>
				</p>
			)}

			{type === "Enterprise Plan" || (
				<>
					<p>
						<img src='/personIcon.png' />
						<span>Upto {users} Users</span>
					</p>
					<p>
						<img src='/storageIcon.png' />
						<span>Upto {storage}gb Storage</span>
					</p>
				</>
			)}

			{type === "Enterprise Plan" || (
				<p>
					<img src='/mailIcon.png' />
					<span>{`Email ${
						type === "Basic"
							? "Support"
							: type === "Free Starter"
							? "Support"
							: type === "Standard"
							? "+Chat Support"
							: type === "Premium"
							? "+Chat+Whatsapp Support"
							: ""
					}`}</span>
				</p>
			)}

			{isTick && (
				<p>
					<img src='/tickIcon.png' />
					<span>{otherDetails}</span>
				</p>
			)}

			{isExpBtn && (
				<div className={styles.featuresButtonContainer}>
					<p className={styles.featuresButton}>EXPLORE FEATURES</p>
					<div
						className={styles.triangle}
						style={{
							backgroundColor: color,
						}}
					></div>
				</div>
			)}
		</div>
	);
}

export default PlanDetailsSection;
