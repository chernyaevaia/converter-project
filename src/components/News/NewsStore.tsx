import { injectable, inject } from 'inversify';
import { makeObservable, observable, runInAction } from 'mobx';
import { INews } from './INews';
import { NewsApi } from './NewsApi';
import { DiContainer } from '../../di';

@injectable()
export abstract class INewsStore {
  public abstract lastNews: INews | undefined;
}

@injectable()
export class NewsStore implements INewsStore {
  @observable
  public lastNews: INews | undefined;

  public constructor(@inject(NewsApi) private api: NewsApi) {
    makeObservable(this);
    this.getNews();
  }

  private async getNews() {
    const allNews = await this.api.loadNews();
    runInAction(() => {
      this.lastNews = allNews[0];
    });
  }
}

DiContainer.register(INewsStore, NewsStore);
