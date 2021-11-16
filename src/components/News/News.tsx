import styles from './news.module.scss'
import { useState, useEffect } from 'react';


const News: React.FC = () => {
    const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3da128da75bb4e819bb876090635ca8f")
    .then(response => response.json())
    .then(data => setNews(data.articles))
  },[])

  const item = news[0]
  if (!item) return null

  return (
    <div className={styles['news-container']}>

          <h1 className={styles.headline}>{item['title']}</h1>
          <p className={styles.description}>{item['description']}</p>
          <img className={styles['news-pic']} alt="" src={item['urlToImage']}/>
 
  </div>
  );
}

export default News;