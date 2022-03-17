import { action, computed, makeObservable, observable, reaction, runInAction} from 'mobx';
import { INews } from './INews';
import { INewsStore } from './NewsStore';

export class NewsViewModel {
  public constructor(private store: INewsStore) {
    makeObservable(this);
    this.showNext()
  }

  @observable
  public pageNumber: number = 0;

  @observable
  public recentNews: INews | undefined

  @computed
  public get ready(): boolean {
    return !!this.recentNews
  }
  @action
  public nextClick = (): void =>{
    if (this.pageNumber < (this.store.newsCount - 1)) {
            this.pageNumber++;
    } else {
      this.pageNumber = 0
    }
  }

 @action
  public backClick = (): void => {
    if (this.pageNumber > 0) {
      this.pageNumber--;
    } else {
      this.pageNumber = this.store.newsCount - 1
    }
    }

  public showNext(): void {
    reaction(
      () => this.pageNumber,
      (pageNumber) => {
      this.pageNumber = pageNumber
        this.init()
      },
      {
        fireImmediately: true,
      }
      )
  }

  public async init() {
    const news = await this.store.getNews(this.pageNumber)
    runInAction(() =>
    this.recentNews = news)
  }

  @computed
  private get news(): INews {
    if (!this.recentNews) throw new Error('News must be defined');
    return this.recentNews;
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
