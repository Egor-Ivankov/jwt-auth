import styles from '../../../styles/Registration.module.css';

export default function Registration() {
    return (
        <section className={styles.registrationContainer}>
            <form className={styles.registrationForm}>
                <h2 className={styles.registrationHeader}>Registration form</h2>
                <input type="text" className={styles.registrationFormInput} placeholder="Enter your nickname"/>
                <input type="text" className={styles.registrationFormInput} placeholder="Enter your email"/>
                <input type="password" className={styles.registrationFormInput} placeholder="Enter your password"/>
                <input type="date" className={styles.registrationFormInput}/>
                <button className={styles.registrationFormButton}>Register</button>
            </form>
        </section>
    )
}
