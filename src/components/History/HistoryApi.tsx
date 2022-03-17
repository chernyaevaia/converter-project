import { injectable} from 'inversify';
import { DiContainer } from '../../di';

interface RateCardDTO {
  code: string,
  value: number
}

interface DayDTO {
[code: string]: RateCardDTO
}

interface HistoryDTO {
datetime: string,
currencies: DayDTO
}

@injectable()
export class HistoryApi {

        public async loadHistory(baseCurrency: string, day5: string, today: string): Promise<HistoryDTO[]> {

          return  await fetch(
            `https://api.currencyapi.com/v3/range?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=${baseCurrency}&datetime_start=${day5}&datetime_end=${today}`
          )
            .then(response => response.json())
            .then(data => data.data);
          
          }
        }


DiContainer.register(HistoryApi, HistoryApi);




