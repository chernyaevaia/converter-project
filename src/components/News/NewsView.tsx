import styles from './news.module.scss';

interface Props {
  title: string;
  description: string;
  urlToImage: string;
  nextClick: () => void;
  backClick: () => void;
}

export const NewsView: React.FC<Props> = (props) => {
  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.headline}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <img className={styles.newsPic} src={props.urlToImage} alt="" />
      <button onClick={props.nextClick} className={styles.nextBtn}>Next</button>
      <button onClick={props.backClick} className={styles.backBtn}>Back</button>
    </div>
  );
};
