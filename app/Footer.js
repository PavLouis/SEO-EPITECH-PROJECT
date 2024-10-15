import styles from './css/Footer.module.css';

const Insta = () => {
    return (
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram">
            <div className={styles.instagram} />
        </a>
    );
}

const Facebook = () => {
    return (
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook">
            <div className={styles.facebook} />
        </a>
    );
}

const Tiktok = () => {
    return (
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Tiktok">
            <div className={styles.tiktok} />
        </a>
    );
}

const Yt = () => {
    return (
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our YouTube channel">
            <div className={styles.yt} />
        </a>
    );
}

const X = () => {
    return (
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our X (formerly Twitter)">
            <div className={styles.x} />
        </a>
    );
}

const Policies = () => {
    return (
        <a href="/policies" aria-label="View our policies" className={styles.policies}>
            policies |
        </a>
    );
}

const Watches = () => {
    return (
        <a href="/products" aria-label="View Andarduft products">
            Andarduft Products
        </a>
    );
}

const AboutUs = () => {
    return (
        <a href="/about" aria-label="Learn more about us">
            about us
        </a>
    );
}

const Services = () => {
    return (
        <a href="/services" aria-label="Discover our services">
            services
        </a>
    );
}

const Company = () => {
    return (
        <a href="/company" aria-label="Learn more about our company">
            company
        </a>
    );
}

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={`${styles.topFooter} ${styles.title}`} aria-label="Footer navigation">
                <ul>
                    <li><Watches/></li>
                    <li><AboutUs/></li>
                    <li><Services/></li>
                    <li><Company/></li>
                </ul>
            </nav>
            <div className={styles.media}>
                <ul aria-label="Follow us on social media">
                    <li><Insta/></li>
                    <li><Facebook/></li>
                    <li><Tiktok/></li>
                    <li><X/></li>
                    <li><Yt/></li>
                </ul>
            </div>
            <div className={styles.bottomFooter}>
                <Policies/>
                <div>@2024 Trolls Mint Essential</div>
            </div>
        </footer>
    );
}

export default Footer;
