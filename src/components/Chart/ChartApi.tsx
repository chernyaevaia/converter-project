import { injectable} from 'inversify';
import { DiContainer } from '../../di';

interface HistoryDTO {
    [data: string]: {[currency: string]: number}
    }


@injectable()
export class ChartApi {

    public async loadCurrentRates(baseCurrency: string): Promise<Record<string, number>> { //ПОСЛЕДНИЕ ДАННЫЕ для заголовка графика
        return await fetch(
            `https://freecurrencyapi.net/api/v2/latest?apikey=109f1ea0-8d87-11ec-83e2-19137ee3aa9a&base_currency=${baseCurrency}`
        )
        .then(response => response.json())
        .then(data => (data.data)); 
        }

        public async loadRatesHistory(baseCurrency: string, dateFrom: string, dateTo: string): Promise<HistoryDTO> { //ИСТОРИЯ для самого графика

          return  await fetch(
            `https://freecurrencyapi.net/api/v2/historical?apikey=109f1ea0-8d87-11ec-83e2-19137ee3aa9a&base_currency=${baseCurrency}&date_from=${dateFrom}&date_to=${dateTo}`
          )
            .then(response => response.json())
            .then(data => data.data);
          }
        }


DiContainer.register(ChartApi, ChartApi);
