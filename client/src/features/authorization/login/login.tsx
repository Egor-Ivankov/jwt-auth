import { useState } from 'react';
import FormHeader from '../form-header/form-header';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Form.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className={styles.containerLogin}>
            <form className={styles.form}>
                <FormHeader header="Login"/>
                <input 
                    type="text" 
                    className={styles.formInput} 
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input 
                    type="password" 
                    className={styles.formInput} 
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <div className={styles.buttons}>
                    <button className={styles.formButton}>Login</button>
                    <Link to='/api/registration' className={styles.link}>Already have an account?</Link>
                </div>
            </form>
        </section>
    )
}
