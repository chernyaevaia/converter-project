import { injectable } from 'inversify';
import { computed, makeObservable } from 'mobx';
import { DiContainer } from '../../di';
import { IChartStore } from './ChartStore';

@injectable()
export class ChartComponentViewModel {
  public constructor(private store: IChartStore, public code: string | undefined = 'USD') {
    makeObservable(this);
  }

  @computed
  public get ready(): boolean {
    return !!this.store.cardsArray;
  }

  @computed
  get cards() {
    if (!this.store.cardsArray) throw new Error('Unable to get the cards');
    return this.store.cardsArray.filter((card) => card.currencyType === this.code);
  }
}

DiContainer.register(ChartComponentViewModel, ChartComponentViewModel);
