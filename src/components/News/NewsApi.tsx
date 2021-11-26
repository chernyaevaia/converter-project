import { injectable } from "inversify";
import { DiContainer } from "../../di/DIContainer";
import { INews } from "./INews";

@injectable()
export class NewsApi {
    public async loadNews(): Promise<INews[]> {
        return await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3da128da75bb4e819bb876090635ca8f')
        .then(response => response.json())
        .then(data => data.articles)
    }
}

DiContainer.register(NewsApi, NewsApi);
