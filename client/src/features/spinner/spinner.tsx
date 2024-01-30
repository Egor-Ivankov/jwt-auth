import styles from '../../styles/Spinner.module.css';

export default function spinner() {
    return (
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className={styles.container}>
                <circle className={styles.progress} cx="400" cy="400" fill="none"
                    r="50" stroke-width="10" stroke="#c9c8c8"
                    stroke-dasharray="520 1400"
                    stroke-linecap="round" />
            </svg>
    )
}
