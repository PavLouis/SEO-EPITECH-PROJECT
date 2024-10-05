import styles from "../css/HomePageCards.module.css";

export default function HomePageCards() {
    return (
        <div className={`${styles.Container}`}>
            <div className={`${styles.Card} ${styles.CardOne}`}></div>
            <div className={`${styles.Card} ${styles.CardTwo}`}></div>
            <div className={`${styles.Card} ${styles.CardThree}`}></div>
            <div className={`${styles.Card} ${styles.CardFour}`}></div>
        </div>
    );
}