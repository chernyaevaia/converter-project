import { injectable} from 'inversify';
import { DiContainer } from '../../di';

interface HistoryDTO {
[data: string]: {[currency: string]: number}
}

@injectable()
export class HistoryApi {

        public async loadHistory(baseCurrency: string, day5: string, today: string): Promise<HistoryDTO> {

          return  await fetch(
            `https://freecurrencyapi.net/api/v2/historical?apikey=109f1ea0-8d87-11ec-83e2-19137ee3aa9a&base_currency=${baseCurrency}&date_from=${day5}&date_to=${today}`
          )
            .then(response => response.json())
            .then(data => data.data);
          
          }
        }


DiContainer.register(HistoryApi, HistoryApi);

//data:

//{"2020-10-01":{"AED":3.6733,"RUB":77.24319}, "2020-10-02":{"URY":42.53047,"MWK":743.93852}

//НАЧИНАЕТСЯ С САМОЙ ПРОШЛОЙ ДАТЫ



