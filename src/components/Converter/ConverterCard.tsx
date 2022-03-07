import { makeObservable, observable } from 'mobx';


export class ConverterCard {

    public currencyType: string;

    @observable
    public exchangeRate: number;
  
    public constructor(currencyType: string, exchangeRate: number) {
        makeObservable(this);
        this.exchangeRate = exchangeRate;
        this.currencyType = currencyType;
    }

    @observable
    public update (exchangeRate: number) {
        this.exchangeRate = exchangeRate;
    }

}