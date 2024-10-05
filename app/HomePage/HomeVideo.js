import styles from "../css/HomeVideo.module.css"

function AboutUs() {
    return(
        <div className={styles.Header}>
            <div className={styles.TitleHeader}>ANDARDUFT</div>
            <div className={styles.Title}>Try the highest quality of Andarduft based products</div>
            <div className={styles.Content}>To unlock the extraordinary freshness and minty vitality of Andarduft, a legendary Icelandic plant cherished by trolls, and craft sustainable, invigorating products that elevate well-being and infuse a hint of Nordic magic into everyday moments.</div>
            <div className={styles.Button}>
                <div className={styles.Line}></div>
                <div className={styles.Text}>
      Discover More
    </div>
            </div>
          </div>
    );
}

export default function HomeVideo() {
    return (
        <div className={styles.Container}>
             <video autoPlay loop muted className={styles.BackgroundVideo}>
                <source src="/videos/home_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                
             </video>
             <AboutUs/>
        </div>
    );
}