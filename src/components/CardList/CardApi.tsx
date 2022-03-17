import { injectable } from 'inversify';
import { DiContainer } from '../../di';


interface RateCardDTO {
    code: string,
    value: number
}

interface TodayDTO {
  [code: string]: RateCardDTO
}

@injectable()
export class CardApi {

        public async loadRates(): Promise<TodayDTO> {
            return await fetch(
                `https://api.currencyapi.com/v3/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB`
            )
            .then(response => response.json())
            .then(data => (data.data)); 
            }
}

DiContainer.register(CardApi, CardApi);