import { computed, makeObservable, reaction, observable} from 'mobx';
import { IChartStore } from './ChartStore';
import { ChartCard } from './ChartCard';
import { DiContainer } from '../../di';
import moment from 'moment';

export class ChartViewModel {
  public constructor(private store: IChartStore, public model: ChartCard) {
    makeObservable(this);
    this.pastRate();
  }

  public get today(): string {
    return moment(new Date()).format('DD.MM.YY');
  }

  @computed
  public get ready(): boolean {
    return !!this.store.cardsArray;
  }

  @computed
  public get currencyType(): string {
    return this.model.currencyType;
  }

  @computed
  public get exchangeRate(): string {
    return (1 / this.model.exchangeRate).toFixed(4);
  }

  @observable
  public fluctuation: string | undefined


  pastRate (): void {
    reaction(
      () => +this.exchangeRate,
      (exchangeRate, prevRate) => {
        this.fluctuation = (exchangeRate - prevRate).toFixed(3);
      },
    );
  }
}

DiContainer.register(ChartViewModel, ChartViewModel);
