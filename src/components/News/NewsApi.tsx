import { injectable } from 'inversify';
import { DiContainer } from '../../di';
import { INews } from './INews';

@injectable()
export class NewsApi {
  public async loadNews(pageNumber:number): Promise<INews[]> {
    return await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=323a8931b05f4453a83c666bac238b7e&pageSize=1&page=${pageNumber}`,
    )
      .then((response) => response.json())
      .then((data) => data.articles);
  }

  public async loadNewsAmount(): Promise<number> {
    return await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=323a8931b05f4453a83c666bac238b7e&pageSize=1&page=0`,
    )
      .then((response) => response.json())
      .then((data) => data.totalResults);
  }


}

DiContainer.register(NewsApi, NewsApi);
