import styles from "../css/HomeTitle.module.css";

export default function HomeTitle() {
    const title = "Troll's Mint Essential";
    return (
        <div className={styles.Title}>{title}</div>
    );
}