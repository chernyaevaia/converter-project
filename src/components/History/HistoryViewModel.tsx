import { computed, makeObservable, observable, runInAction } from 'mobx';
import moment from 'moment';
import { HistoryCard } from './HistoryCard';
import { IHistoryStore } from './HistoryStore';

export class HistoryViewModel {
  public constructor(private store: IHistoryStore, public code: string | undefined = 'USD') {
    makeObservable(this);
  }

  @observable
  public historyCards: HistoryCard[] = [];

  @computed
  public get ready() {
    return !!this.historyCards;
  }

  public get yesterday(): string {
    return moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD');
  }

  public get lastday(): string {
    return moment(new Date()).subtract(7, 'days').format('YYYY-MM-DD');
  }

  public async init() {
    if (this.code === undefined) {
      return;
    }

    const cards = await this.store.recentHistory(this.code, this.lastday, this.yesterday);
    runInAction(() => (this.historyCards = cards.filter((card) => cards.indexOf(card) < 5)));
  }
}
