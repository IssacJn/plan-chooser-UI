import styles from "./Profile.module.css";

function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src='/profile.png' />
			<h3>
				Ram Mohan<span> &gt;</span>
			</h3>
			<p>rammohan2@gmail.com</p>
		</div>
	);
}

export default Profile;
