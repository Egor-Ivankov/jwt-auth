import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import styles from '../../styles/Home.module.css';

export default function Home() {
    return (
            <main>
                <Navbar/>
                <h2 className={styles.header}>
                    We combine strategy,technology, <br/>
                    data science and design to solve the <br/>
                    most complex business challenges.
                </h2>
                <Link to="/api/login" className={styles.loginLink}>
                    Login
                </Link>
            </main>
    )
}
