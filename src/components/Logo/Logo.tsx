import styles from './logo.module.scss'

const Logo: React.FC = () => {
    return (
    <header className={styles.header}>
    <h1 className={styles.h1}>Pet Project</h1>
    <h2 className={styles.h2}>Currency rates</h2>
  </header>
    )
}

export default Logo;