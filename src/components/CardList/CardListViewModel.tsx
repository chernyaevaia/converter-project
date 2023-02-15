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
    return !!this.store.cardsArray;
  }

  @computed
  get cards() {
    if (!this.store.cardsArray) throw new Error('Unable to get the cards');
    return this.store.cardsArray;
  }
}

DiContainer.register(CardListViewModel, CardListViewModel);
