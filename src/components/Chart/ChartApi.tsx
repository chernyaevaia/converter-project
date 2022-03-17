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
export class ChartApi {

    public async loadCurrentRates(baseCurrency: string): Promise<DayDTO> {
        return await fetch(
            `https://api.currencyapi.com/v3/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=${baseCurrency}`
        )
        .then(response => response.json())
        .then(data => (data.data)); 
        }



        public async loadRatesHistory(baseCurrency: string, dateFrom: string, dateTo: string): Promise<HistoryDTO[]> {

          return  await fetch(
            `https://api.currencyapi.com/v3/range?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=${baseCurrency}&datetime_start=${dateFrom}&datetime_end=${dateTo}`
          )
            .then(response => response.json())
            .then(data => data.data);
          }
        }


DiContainer.register(ChartApi, ChartApi);
