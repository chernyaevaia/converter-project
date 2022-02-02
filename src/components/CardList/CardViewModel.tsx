import { computed, makeObservable, reaction, observable } from 'mobx';
import { ICardStore } from './CardStore';
import { CurrencyCard } from './CurrencyCard';
import { DiContainer } from '../../di';


export class CardViewModel {
  public constructor(private store: ICardStore, public model: CurrencyCard) {
    makeObservable(this);
    this.pastRate()
  }

  @computed
  public get ready(): boolean {
    return !!this.store.cardsArray;
  }

  @computed
  public get currencyType(): string {
    return this.model.currencyType
  }

  @computed
  public get exchangeRate(): number {
    return +(1/this.model.exchangeRate).toFixed(2)
  }

  @observable
  public fluctuation: number | undefined


  pastRate(): void {
    reaction(
      () => this.exchangeRate,
      (exchangeRate, prevRate) => {
        this.fluctuation = +(exchangeRate - prevRate).toFixed(3)
      }
    );
  }
}

DiContainer.register(CardViewModel, CardViewModel);
