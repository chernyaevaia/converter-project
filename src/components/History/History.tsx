import './history.css'

const History = () => {
    return (
        <div className="history-container">

        <h3 className="history-container__header">За последние 5 дней</h3>
  
        <div className="history-container__blocks">
        <div className="blocks__white"></div>
        <div className="blocks__white"></div>
        <div className="blocks__white"></div>
        </div>
  
        <div className="history-container__data">
  
          <p className="history-container__date-text">Дата</p>
          <p className="history-container__rate-text">Курс</p>
          <p className="history-container__change-text">Изменение</p>
  
          <p className="history-container__date">03.11.21</p>
          <p className="history-container__rate">72.3211</p>
          <p className="history-container__change">0.01</p>
  
          <p className="history-container__date">03.11.21</p>
          <p className="history-container__rate">72.3211</p>
          <p className="history-container__change">0.01</p>
          
          <p className="history-container__date">03.11.21</p>
          <p className="history-container__rate">72.3211</p>
          <p className="history-container__change">0.01</p>
  
          <p className="history-container__date">03.11.21</p>
          <p className="history-container__rate">72.3211</p>
          <p className="history-container__change">0.01</p>
  
          <p className="history-container__date">03.11.21</p>
          <p className="history-container__rate">72.3211</p>
          <p className="history-container__change">0.01</p>
        </div>
      </div>
    )
}

export default History;