// import { computed, makeObservable } from 'mobx';
// import { ICardStore } from './CardStore';
export {}

// export class CardListViewModel {
//   public constructor(private store: ICardStore) {
//     makeObservable(this);
//   }

//   @computed
//   public get ready(): boolean {
//     return !!this.store.lastRates;
//   }

//   @computed
//   get rates() {
//     if (!this.store.lastRates) throw new Error('Unable to get the rates');
//     return this.store.lastRates;
//   }

// }