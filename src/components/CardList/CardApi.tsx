import { injectable } from 'inversify';
import { DiContainer } from '../../di';

@injectable()
export class CardApi {

        public async loadRates(): Promise<Record<string, number>> {
            return await fetch(
                `https://freecurrencyapi.net/api/v2/latest?apikey=109f1ea0-8d87-11ec-83e2-19137ee3aa9a&base_currency=RUB`
            )
            .then(response => response.json())
            .then(data => (data.data)); 
            }
}

//{"USD":0.013114,"JPY":1.49936,"CNY":0.083409,"CHF":0.01204}

DiContainer.register(CardApi, CardApi);