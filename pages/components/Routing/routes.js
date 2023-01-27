import Link from "next/link";
import styles from './header.module.css';

const Navigation = () => {

    return (
        <div className={styles.header}>
            <Link href="/">
                <h1 className={styles.title}>ChimasHub</h1>
            </Link>
            <a href="mailto:ckalu9@gmail.com">Ckalu9@gmail.com</a>
        </div>
    )
}

export default Navigation;