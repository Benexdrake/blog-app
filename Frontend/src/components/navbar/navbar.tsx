import styles from '@/styles/modules/navbar.module.css';
import { Link } from 'react-router-dom';

export let Navbar = () =>
{
    return (
        <nav className={styles.navbar}>
            <div className={styles.user_field}></div>
            <ul className={styles.links}>
                <Link to={'/'}>
                    <li><i className="fa-solid fa-house"></i></li>
                </Link>
                <Link to={'/new'}>
                    <li><i className="fa-solid fa-plus"></i></li>
                </Link>  
            </ul>
            <button className={styles.button}>LOGIN</button>
        </nav>
    );
}