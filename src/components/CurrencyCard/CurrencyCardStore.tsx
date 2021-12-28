import { injectable, inject } from 'inversify';
import { makeObservable, observable, runInAction } from 'mobx';
import { CurrencyCardApi } from './CurrencyCardApi';
import { ICurrencyCard } from './ICurrencyCard';
import { DiContainer } from '../di/DIContainer';


@injectable()
export abstract class ICurrencyCardStore {
public lastRates: ICurrencyCard[] = [];
//public ratesMap: Map<string, ICurrencyCard> = new Map<string, ICurrencyCard>()
}

@injectable()
export class CurrencyCardStore implements ICurrencyCardStore{
  @observable
  public lastRates: ICurrencyCard[] = [];
  //public ratesMap: Map<string, ICurrencyCard> = new Map<string, ICurrencyCard>();


  public constructor(@inject(CurrencyCardApi) private api: CurrencyCardApi) {
    makeObservable(this);
    this.getRates();
  }

  private async getRates() {
    const rates = await this.api.loadRates();
    runInAction(() => {
      this.lastRates = Object.entries(rates).map(rate => this.createCurrencyCard(rate[0], rate[1]));
    })
  }

  private createCurrencyCard(currencyType: string, exchangeRate: number): ICurrencyCard {
    return { currencyType, exchangeRate }
  }

}

DiContainer.register(ICurrencyCardStore, CurrencyCardStore);