import { injectable, inject } from 'inversify';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { CardApi } from './CardApi';
import { DiContainer } from '../../di/DIContainer';
import { CurrencyCard } from './CurrencyCard';

@injectable()
export abstract class ICardStore {
  public cardsArray: CurrencyCard[] = []
}

@injectable()
export class CardStore implements ICardStore {

  @observable
  private ratesMap: Map<string, CurrencyCard> = new Map<string, CurrencyCard>();
  
  public constructor(@inject(CardApi) private api: CardApi) {
    makeObservable(this);
    this.getRates();
    this.updateRate();
  }

  @computed
  public get cardsArray(): CurrencyCard[] {
    return  [...this.ratesMap.values()]
  }

  private async getRates() {
    const rates = await this.api.loadRates(); //{"USD":0.013114,"JPY":1.49936,"CNY":0.083409,"CHF":0.01204}
    runInAction(() => {
      Object.entries(rates) // [["USD", 0.013114], ["JPY", 1.49936], ["CNY", 0.083409], ["CHF", 0.01204]]
      .forEach((rate) => { //["USD", 0.013114]
        const card = this.ratesMap.get(rate[0]);  // значение по rate[0] - ключу "USD"
      if (card) {                               
        card.update(rate[1]);               
      } else {
          let newCard = new CurrencyCard(rate[0], rate[1]);
          this.ratesMap.set(rate[0], newCard);
        }
      });    
    });
  } 

  public updateRate() {
    setInterval(() => this.getRates(), 30000);
  }
}


DiContainer.register(ICardStore, CardStore);
