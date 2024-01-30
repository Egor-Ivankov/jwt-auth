import FormHeader from '../form-header/form-header';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Form.module.css';

export default function Registration() {
    return (
        <section className={styles.container}>
            <form className={styles.form}>
                <FormHeader header="Registration"/>
                <input type="text" className={styles.formInput} placeholder="Enter your nickname"/>
                <input type="text" className={styles.formInput} placeholder="Enter your email"/>
                <input type="password" className={styles.formInput} placeholder="Enter your password"/>
                <input type="date" className={styles.formInput}/>
                <div className={styles.buttons}>
                    <button className={styles.formButton}>Login</button>
                    <Link to='/api/login' className={styles.link}>Don't have an account yet?</Link>
                </div>
            </form>
        </section>
    )
}
