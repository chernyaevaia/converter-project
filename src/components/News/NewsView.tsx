import styles from './news.module.scss'

interface Props {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export const NewsView: React.FC<Props> = (props) => {
  return (
    <div className={styles.newsContainer} onClick={props.onClick}>
      <h1 className={styles.headline}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p> 
      <div>{props.image}</div>
    </div>
  );
}
