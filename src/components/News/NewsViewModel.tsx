import { computed, makeObservable } from "mobx";
import { INewsStore } from './NewsStore'

export class NewsViewModel {
    public constructor (private store: INewsStore) {
        makeObservable(this);
    }

    @computed 
    public get title(): string {
        return this.store.lastNews!.title;
    }

    @computed
    public get description(): string {
        return this.store.lastNews!.description;
    }

    @computed 
    public get image(): string {
        return this.store.lastNews!.image
    }

    public onClick = (): void => {
        window.open(this.store.lastNews!.url, '_blank');
    }
}

export default NewsViewModel;