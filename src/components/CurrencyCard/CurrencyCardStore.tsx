import { injectable, inject } from 'inversify';
import { makeObservable, observable, runInAction } from 'mobx';
import { CurrencyCardApi } from './CurrencyCardApi';
import { ICurrencyCard } from './ICurrencyCard';
import { DiContainer } from '../../di';


@injectable()
export class CurrencyCardStore implements ICurrencyCard {
  

  public constructor(@inject(CurrencyCardApi) private api: CurrencyCardApi) {
    makeObservable(this);
    this.getNews();
  }

  private async getNews() {
    const allNews = await this.api.loadTypes();
    runInAction(() => {
      this.lastNews = allNews[0];
    });
  }
}