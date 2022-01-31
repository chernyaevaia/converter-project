import { injectable, inject } from 'inversify';
import { computed, makeObservable, observable, runInAction } from 'mobx';
import { CardApi } from './CardApi';
import { ICard } from './ICard';
import { DiContainer } from '../../di/DIContainer';
import { CurrencyCard } from './CurrencyCard';

@injectable()
export abstract class ICardStore {
  public lastRates: ICard[] = [];  
  public cardsArray: CurrencyCard[] = []
}

@injectable()
export class CardStore implements ICardStore {
  public lastRates: ICard[] = [];


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
    const rates = await this.api.loadRates();
    runInAction(() => {
      Object.entries(rates).forEach((rate) => {
        const card = this.ratesMap.get(rate[0]);  
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
