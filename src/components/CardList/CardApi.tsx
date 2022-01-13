import { injectable } from 'inversify';
import { DiContainer } from '../../di';

@injectable()
export class CardApi {

        public async loadRates(): Promise<Record<string, number>> {
            return await fetch(
                "https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB"
            )
            .then(response => response.json())
            .then(data => (data.data)); // объект с "USD": 0.13 итд
            }
}

DiContainer.register(CardApi, CardApi);