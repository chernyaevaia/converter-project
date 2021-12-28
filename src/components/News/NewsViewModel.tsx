import { computed, makeObservable } from 'mobx';
import { INews } from './INews';
import { INewsStore } from './NewsStore';

export class NewsViewModel {
  public constructor(private store: INewsStore) {
    makeObservable(this);
  }

  @computed
  public get ready(): boolean {
    return !!this.store.lastNews;
  }

  @computed
  private get news(): INews {
    if (!this.store.lastNews) throw new Error('News must be defined');
    return this.store.lastNews;
  }

  @computed
  public get title(): string {
    return this.news.title;
  }

  @computed
  public get description(): string {
    return this.news.description;
  }

  @computed
  public get urlToImage(): string {
    return this.news.urlToImage;
  }

  public onClick = (): void => {
    window.open(this.news.url, '_blank');
  };
}

