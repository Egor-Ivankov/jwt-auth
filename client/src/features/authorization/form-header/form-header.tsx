import { Link } from 'react-router-dom';
import BackIcon from '../../../assets/back-icon.png';
import styles from '../../../styles/Form.module.css';
export default function FormHeader({header}: {header: string}) {
    return (
    <div className={styles.headers}>
        <h2 className={styles.header}>{header} form</h2>
        <Link to="/"><img src={BackIcon} alt="back-icon" className={styles.icon}/></Link>
    </div>
    )
}
