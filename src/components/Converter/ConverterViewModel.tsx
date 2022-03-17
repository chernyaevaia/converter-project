import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { IConverterStore } from './ConverterStore';
import { DiContainer } from '../../di';


export class ConverterViewModel {
  public constructor(private store: IConverterStore) {
    makeObservable(this);
    this.onChangeInput1();
    this.onChangeInput2();
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
  public input1: string | undefined;

  @observable
  public input2: string | undefined;


  @action
  public selectedCurrency1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.selectedCurrencyFrom = event.target.value;
  }

  @action
  public selectedCurrency2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.selectedCurrencyTo = event.target.value;
  }

  @action
  public getInputTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.input1 = event.target.value;
  }
  
  @action
  public getInputFrom = (event:  React.ChangeEvent<HTMLInputElement>) => {
    this.input2 = event.target.value;
  }

onChangeInput1(): void {
  reaction(
    () => this.input1,
    () => {
      this.input2 = undefined
    }
  );
}

onChangeInput2(): void {
  reaction(
    () => this.input2,
    () => {
      this.input1 = undefined
    }
  );
}


  @computed
  public get result1(): string {
    if (this.input1 === undefined) {
      const cardTo = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyTo);
      const cardFrom = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyFrom);
      
      const rateFrom = !cardFrom ? 0 : cardFrom.exchangeRate;
      const rateTo = !cardTo ? 0: cardTo.exchangeRate;
      return ((rateFrom / rateTo) * +this.input2!).toFixed(3);

    } else {
      return this.input1;
    }
  }

  @computed
  public get result2(): string {
    if (this.input2 === undefined) {
      const cardTo = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyFrom);
      const cardFrom = this.store.cardsArray.find((card) => card.currencyType === this.selectedCurrencyTo);

      const rateFrom = !cardFrom ? 0 : cardFrom.exchangeRate;
      const rateTo = !cardTo ? 0: cardTo.exchangeRate;
      return ((rateFrom / rateTo) * +this.input1!).toFixed(3)
    } else {
      return this.input2;
    }
  }
}


DiContainer.register(ConverterViewModel, ConverterViewModel);
