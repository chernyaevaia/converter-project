import styles from './news.module.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Component } from 'react';


// export default class News extends Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         }
//     }

//     componentDidMount() {
//         fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ae3f29be81ef487d9880d9011f252b93")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     isLoaded: true,
//                     news: result.articles,
//                 })
//             },
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 })
//             }
//         )
//     }
//     render() {
//         const {error, isLoaded, news} = this.state;
//         if (error) {
//             return (
//                 <div className={styles['news-container']}>
//                     <p>Error</p>
//                     </div>
//             ) 
//         } else if (!isLoaded) {
//             return (  
//             <div className={styles['news-container']}>    
//             <p className={styles['loading-text']}>Loading...</p>
//             </div>
//             )

//         } else {
//             return (
//                 <div className={styles['news-container']}>
                    
//                     {/* <p className={styles.headline}>{news.title}</p>
//                     <p>{news.description}</p>
//                     <img className={styles['news-pic']} src={news.urlToImage} alt="" /> */}
//                 </div>
//             )
//         }
//     }
// }

// export default News;




function News() {
    const [news, setNews] = useState([])

    useEffect(() => {
        const loadNews = async() => {
            const response = await axios.get(
                "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3da128da75bb4e819bb876090635ca8f"
                );
                setNews(response.data.articles);
        }
        loadNews();
    }, []);

    return (
        <div className={styles['news-container']}>
        { news.map(item => {
            return (<>
              <h1 className={styles.headline}>{item['title']}</h1>
              <p className={styles.description}>{item['description']}</p>
              <img className={styles['news-pic']} alt="" src={item['urlToImage']}/>
              </>  
            );
          })}
      </div>
    );
  }
  

export default News;