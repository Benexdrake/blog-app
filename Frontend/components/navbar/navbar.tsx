import styles from '@/styles/modules/navbar.module.css'
import Link from 'next/link';

export let Navbar = () =>
{
    return (
        <nav className={styles.navbar}>
            <div className={styles.user_field}></div>
            <ul className={styles.links}>
                <Link href={'/'}>
                <li><i className="fa-solid fa-house"></i></li>
                </Link>
                <Link href={'/new'}>
                <li><i className="fa-solid fa-plus"></i></li>
                </Link>
            </ul>
            <button className={styles.button}>LOGIN</button>
        </nav>
    );
}