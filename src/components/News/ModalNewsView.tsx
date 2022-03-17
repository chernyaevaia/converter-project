import styles from './modal.module.scss';


interface Props {
    title: string;
    description: string;
    urlToImage: string;
  }
  
  export const ModalNewsView: React.FC<Props> = (props) => {
    return (
      <div className={styles.modal}>
      <div className={styles.content}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.urlToImage} alt="" />
        <button>Close</button>
      </div>
      </div>
    );
  };
  