import Link from 'next/link';
import styles from './css/Footer.module.css';
const Insta = () => {
    return (
        <a
        className={styles.instagram}
        href="https://www.instagram.com/epitech.officiel/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Epitech's YouTube channel"
    >
    </a>
    );
}
const Facebook = () => {
    return (
        <a
        className={styles.facebook}
        href="https://www.facebook.com/epitech/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Epitech's YouTube channel"
    >
    </a>
    );
}
const Tiktok = () => {
    return (
        <a
        className={styles.tiktok}
        href="https://www.tiktok.com/discover/epitech"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Epitech's YouTube channel"
    >
    </a>
    );
}
const Yt = () => {
    return (
        <a
            className={styles.yt}
            href="https://www.youtube.com/@epitech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Epitech's YouTube channel"
        >
        </a>
    );
}
const X = () => {
    return (
        <a
        className={styles.x}
        href="https://x.com/epitech?lang=fr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Epitech's YouTube channel"
    >
    </a>
    );
}
const Policies = () => {
    return (
        <div className={styles.policies}>
            policies |
        </div>
    );
}
const Watches = () => {
    return (
        <Link href={'/product'}>
            Andarduft Products
        </Link>
    );
}
const AboutUs = () => {
    return (
        <Link href={'/about-us'}>
            about us
        </Link>
    );
}

const Company = () => {
    return (
        <Link href={'/contact-us'}>
            contact us
        </Link>
    );
}
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={` ${styles.topFooter} ${styles.title}`}>
                <Watches />
                <AboutUs />
                <Company />
            </div>
            <div className={styles.media}>
                <Insta />
                <Facebook />
                <Tiktok />
                <X />
                <Yt />
            </div>
            <div className={styles.bottomFooter}>
                <Policies />
                <div>@2024 Trolls Mint Essential</div>
            </div>
            <div className='flex w-full justify-center max-sm:px-8'>
                <p className='sm:text-[40px] text-[20px] font-bold text-center'>
                    THIS IS A STUDENT PROJECT,  MADE FOR EDUCATIONAL PURPOSES ONLY
                </p>
            </div>
        </div>
    );
}
export default Footer;