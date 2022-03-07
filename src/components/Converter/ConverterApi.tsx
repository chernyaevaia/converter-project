import { injectable} from 'inversify';
import { DiContainer } from '../../di';


@injectable()
export class ConverterApi {

    public async loadCurrentRates(baseCurrency: string): Promise<Record<string, number>> {
        return await fetch(
            `https://freecurrencyapi.net/api/v2/latest?apikey=109f1ea0-8d87-11ec-83e2-19137ee3aa9a&base_currency=${baseCurrency}`
        )
        .then(response => response.json())
        .then(data => (data.data)); 
        }
    }

DiContainer.register(ConverterApi, ConverterApi);

//{"USD":0.009496,"JPY":1.090681,"CNY":0.059976,"CHF":0.00873}