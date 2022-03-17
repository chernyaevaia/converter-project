import { injectable, inject } from 'inversify';
import { INews } from './INews';
import { NewsApi } from './NewsApi';
import { DiContainer } from '../../di';
import { observable, runInAction } from 'mobx';

@injectable()
export abstract class INewsStore {
  public abstract getNews(pageNumber: number): Promise<INews>;
  public newsCount: number = 1
}

@injectable()
export class NewsStore implements INewsStore {
  public constructor(@inject(NewsApi) private api: NewsApi) {
   this.getNewsAmount()
  }

  @observable
  public newsCount: number = 1

  public async getNews(pageNumber: number): Promise<INews> {
    const news = await this.api.loadNews(pageNumber);
    return news[0];
  }

  public async getNewsAmount(): Promise<void> {
    const count = await this.api.loadNewsAmount();
    runInAction(() => {
      this.newsCount = count
    })
  }

}

DiContainer.register(INewsStore, NewsStore);
