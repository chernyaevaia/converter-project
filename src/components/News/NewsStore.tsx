import { injectable } from "inversify";
import { observable, runInAction } from "mobx";
import { INews } from "./INews";
import { NewsApi } from './NewsApi'
import { inject } from "inversify";
import {DiContainer} from "../../di/DIContainer";


@injectable()
export abstract class INewsStore {
    public abstract lastNews: INews | undefined;
}

@injectable()
export class NewsStore implements INewsStore {
    @observable
    public lastNews: INews | undefined;

    public constructor(
        @inject (NewsApi) private api: NewsApi
    ) {
        this.getNews()
    }

    private async getNews() {
        const allNews = await this.api.loadNews();
        runInAction(() => {
            this.lastNews = allNews[0]
        })
    }
}

DiContainer.register(INewsStore, NewsStore);

