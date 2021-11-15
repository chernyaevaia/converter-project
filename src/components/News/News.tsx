import styles from './news.module.scss'

const News = () => {
    return (
        <div className={styles['news-container']}></div>
    )
}

export default News;


// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=bbc-news&' +
//           'apiKey=ae3f29be81ef487d9880d9011f252b93';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })