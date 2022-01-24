import { injectable } from 'inversify';
import { computed, makeObservable } from 'mobx';
import { DiContainer } from 'src/di';
import { ICardStore } from './CardStore';

@injectable()
export class CardListViewModel {
  public constructor(private store: ICardStore) {
    makeObservable(this);
  }

  @computed
  public get ready(): boolean {
    return !!this.store.lastRates;
  }

  @computed
  get rates() {
    if (!this.store.lastRates) throw new Error('Unable to get the rates');
    return this.store.lastRates;
  }
}

DiContainer.register(CardListViewModel, CardListViewModel);