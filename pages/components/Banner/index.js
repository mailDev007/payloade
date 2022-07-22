import styles from './banner.module.css';

const Banner = (bannerContent) => {
    return (
        <div className={styles.bannerSection}>
            <img src="/bg.png" />
            <div className={styles.bannerText}>
                {bannerContent.children}
            </div>
        </div>
    )
}

export default Banner;