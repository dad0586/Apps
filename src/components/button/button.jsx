
import styles from './button.module.scss'
const ButtonComponent = ({ title, bgc, color, size }) => {
    return (
        <div>
            <button className={styles.dynamicButton} style={{
                background: bgc,
                color: color,
                fontSize: size,
            }}>{title}</button>
        </div>
    )
}

export default ButtonComponent