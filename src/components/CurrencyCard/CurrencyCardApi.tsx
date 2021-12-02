import { injectable } from 'inversify';
import { DiContainer } from '../../di';
//import { ICurrencyCard } from './ICurrencyCard';


@injectable()
export class CurrencyCardApi {
    
    public async loadTypes() {
        return await fetch(
            "https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB"
        )
        .then(response => response.json())
        .then(data => ([...Object.keys(data.data)])); //объект ключ-значение
        }

        public async loadRates() {
            return await fetch(
                "https://freecurrencyapi.net/api/v2/latest?apikey=8e1459f0-45fa-11ec-87dc-27eb5ec7374c&base_currency=RUB"
            )
            .then(response => response.json())
            .then(data => (data.data)); //объект ключ-значение
            }
}

DiContainer.register(CurrencyCardApi, CurrencyCardApi);