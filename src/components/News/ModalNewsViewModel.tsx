import { computed, makeObservable, observable, runInAction} from 'mobx';
import { INews } from './INews';
import { INewsStore } from './NewsStore';

export class ModalNewsViewModel {
  public constructor(private store: INewsStore, public id: string | undefined) {
    makeObservable(this);
  }

  @observable
  public recentNews: INews | undefined

  @computed
  public get ready(): boolean {
    console.log(this.recentNews)
    return !!this.recentNews
  }

  public async init() {
    if (this.id){
        const news = await this.store.getNews(+this.id)
        runInAction(() =>
        this.recentNews = news
        )}
  }

  @computed
  private get news(): INews {
    if (!this.recentNews) throw new Error('News must be defined');
    return this.recentNews;
  }

  @computed
  public get title(): string {
    console.log(this.news.title)
    console.log(this.id)
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

}
