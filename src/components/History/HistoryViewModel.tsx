import { computed, makeObservable, observable, runInAction } from 'mobx';
import moment from 'moment';
import { HistoryCard } from './HistoryCard';
import { IHistoryStore } from './HistoryStore';

export class HistoryViewModel {
  public constructor(private store: IHistoryStore, public code: string) {
    makeObservable(this);
  }

 @observable
  public historyCards: HistoryCard[] = [];

  @computed
  public get ready() {
    return !!this.historyCards
  }

  public get today(): string {
    return moment(new Date()).format('YYYY-MM-DD');
  }


  public get lastday(): string {
    return moment(new Date()).subtract(4, 'days').format('YYYY-MM-DD');
  }

  public async init(): Promise<void> {

    const cards = await this.store.recentHistory(this.code, this.today, this.lastday);

    runInAction(() => 
    this.historyCards = cards.filter(card => cards.indexOf(card) < 4)
    )
  }
}
  