import { Link } from 'react-router-dom';
import styles from '../../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav>
            <div className={styles.menu}>
                <h2 className={styles.mainLogo}>Any.do</h2>

                <Link to="/" className={styles.menuLink}> 
                    Products
                </Link>

                <Link to="/" className={styles.menuLink}> 
                    Contact
                </Link>
        
                <Link to="/api/registration" className={styles.menuLink}> 
                    Try free
                </Link>
            </div>
        </nav>
    )
}
