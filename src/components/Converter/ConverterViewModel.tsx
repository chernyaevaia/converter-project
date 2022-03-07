import { action, computed, makeObservable, observable } from 'mobx';
import { IConverterStore } from './ConverterStore';
import { DiContainer } from '../../di';

export class ConverterViewModel {
  public constructor(private store: IConverterStore) {
    makeObservable(this);
  }

  @computed
  public get ready(): boolean {
    return !!this.store.cardsArray;
  }

  @computed
  public get cards() {
    return this.store.cardsArray;
  }

  @computed
  public get currencyOptions(): string[] {
    return this.store.cardsArray.map((card) => card.currencyType);
  }

  @observable
  public selectedCurrencyFrom: string = 'USD';

  @observable
  public selectedCurrencyTo: string = 'RUB';

  @observable
  public input1 = 0;

  @observable
  public input2 = 0;

  @action
  public selectedCurrency1(event: any) {
    this.selectedCurrencyFrom = event;
  }
  @action
  public selectedCurrency2(event: any) {
    this.selectedCurrencyTo = event;
  }
  @action
  public getInputTo(event: any) {
    this.input1 = event;
  }
  @action
  public getInputFrom(event: any) {
    this.input2 = event;
  }

  @computed
  public get result1(): number {
    const cardTo = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyTo);
    const cardFrom = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyFrom);
    console.log(cardTo);

    if(!cardFrom && !cardTo) {
      return 0
    }

    const rateFrom = cardFrom!.exchangeRate;
    const rateTo = cardTo!.exchangeRate;
    console.log(rateTo);
    return  (rateFrom/ rateTo)*this.input2
  }

  @computed
  public get result2(): number {
    const cardTo = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyFrom);
    const cardFrom = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyTo);
    console.log(cardTo);

    if(!cardFrom && !cardTo) {
      return 0
    }

    const rateTo = cardTo!.exchangeRate;
    const rateFrom = cardFrom!.exchangeRate;
    console.log(rateTo);
    console.log(this.input1/rateTo);
    return (rateFrom/rateTo)*this.input1
  }
}

DiContainer.register(ConverterViewModel, ConverterViewModel);
