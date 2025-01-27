import styles from '@/styles/modules/navbar.module.css'

export let Navbar = () =>
{
    return (
        <nav className={styles.navbar}>
            <div className={styles.user_field}></div>
            <ul className={styles.links}>
                <a href={'/'}>
                <li><i className="fa-solid fa-house"></i></li>
                </a>
                <a href={'/new'}>
                <li><i className="fa-solid fa-plus"></i></li>
                </a>
            </ul>
            <button className={styles.button}>LOGIN</button>
        </nav>
    );
}