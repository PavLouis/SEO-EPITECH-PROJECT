import styles from "../css/HomeVideo.module.css"

function AboutUs() {
    return (
        <section className={styles.Header} aria-label="About Andarduft">
            <h1 className={styles.TitleHeader}>ANDARDUFT</h1>
            <h2 className={styles.Title}>Try the highest quality of Andarduft-based products</h2>
            <p className={styles.Content}>
                To unlock the extraordinary freshness and minty vitality of Andarduft, a legendary Icelandic plant cherished by trolls, and craft sustainable, invigorating products that elevate well-being and infuse a hint of Nordic magic into everyday moments.
            </p>
            <button className={styles.Button} aria-label="Discover more about Andarduft">
                <div className={styles.Line}></div>
                <div className={styles.Text}>Discover More</div>
            </button>
        </section>
    );
}

export default function HomeVideo() {
    return (
        <div className={styles.Container}>
             <video autoPlay loop muted className={styles.BackgroundVideo} aria-label="Background video showcasing Andarduft products">
                <source src="/videos/home_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                
             </video>
             <AboutUs/>
        </div>
    );
}