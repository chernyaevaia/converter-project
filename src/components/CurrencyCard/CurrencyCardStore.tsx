import { injectable, inject } from 'inversify';
import { makeObservable, observable } from 'mobx';
import { CurrencyCardApi } from './CurrencyCardApi';
import { ICurrencyCard } from './ICurrencyCard';
import { DiContainer } from '../../di';


@injectable()
export abstract class ICurrencyCardStore {
  public abstract lastRates: ICurrencyCard | undefined;
}

@injectable()
export class CurrencyCardStore implements ICurrencyCardStore{
  @observable
  public lastRates: ICurrencyCard | undefined;

  public constructor(@inject(CurrencyCardApi) private api: CurrencyCardApi) {
    makeObservable(this);
    this.getRates();
    this.getTypes()
  }

  private async getTypes() {
    const allTypes = await this.api.loadTypes();
  } 

  private async getRates() {
    const allRates = await this.api.loadRates();
  } 
}

DiContainer.register(ICurrencyCardStore, CurrencyCardStore);
