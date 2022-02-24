import styles from './logo.module.scss';

const Logo: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.petProject}>Pet Project</h1>
      <h2 className={styles.curRates}>Currency rates</h2>
    </header>
  )
};

export { Logo };
