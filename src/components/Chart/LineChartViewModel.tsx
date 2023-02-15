import { injectable } from 'inversify';
import { action, computed, makeObservable, observable, reaction, runInAction } from 'mobx';
import moment from 'moment';
import { DiContainer } from '../../di';
import { IChartStore } from './ChartStore';

export enum ChartType {
  WEEK,
  MONTH,
  QUARTER,
  YEAR,
}

@injectable()
export class LineChartViewModel {
  public constructor(private store: IChartStore, public code: string | undefined = 'USD') {
    makeObservable(this);
    this.updateStartDate();
    this.updateRateArray();
  }

  @observable
  public chartType: ChartType = ChartType.WEEK;

  @observable
  public ratesArray: number[] = [];

  public get yesterday(): string {
    return moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD');
  }

  public getTypeOnClick(chartType: ChartType): () => void {
    return action(() => {
      this.chartType = chartType;
    });
  }

  public getDates(startDate: Date, endDate: Date): string[] {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (this: any, days: number) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    const datesLabels = dates.map((date) => moment(date).format('Do MMMM'));
    return datesLabels;
  }

  @computed
  public get labels() {
    if (this.chartType === 0) {
      const day7 = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      return this.getDates(day7, new Date(Date.now() - 1 * 24 * 60 * 60 * 1000));
    } else if (this.chartType === 1) {
      const day30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
      return this.getDates(day30, new Date(Date.now() - 1 * 24 * 60 * 60 * 1000));
    } else if (this.chartType === 2) {
      let theMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      let now = new Date();
      let quartalLabels = [];
      for (let i = -2; i <= 0; i++) {
        let past = new Date(now.getFullYear(), now.getMonth() + i, 1);
        let month = theMonths[past.getMonth()];
        let year = past.getFullYear();
        quartalLabels.push(month + ' ' + year);
      }
      return quartalLabels;
    } else {
      let theMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      let now = new Date();
      let yearLabels = [];
      for (let i = -12; i < 1; i++) {
        let past = new Date(now.getFullYear(), now.getMonth() + i, 1);
        let month = theMonths[past.getMonth()];
        let year = past.getFullYear();
        yearLabels.push(month + ' ' + year);
      }
      return yearLabels;
    }
  }

  @observable
  public startDate: string = '';

  public updateStartDate() {
    reaction(
      () => this.chartType,

      (chartType) => {
        if (chartType === 0) {
          this.startDate = moment(new Date()).subtract(7, 'days').format('YYYY-MM-DD');
        } else if (chartType === 1) {
          this.startDate = moment(new Date()).subtract(30, 'days').format('YYYY-MM-DD');
        } else if (chartType === 2) {
          this.startDate = moment(new Date()).subtract(90, 'days').format('YYYY-MM-DD');
        } else {
          this.startDate = moment(new Date()).subtract(365, 'days').format('YYYY-MM-DD');
        }
      },
      {
        fireImmediately: true,
      },
    );
  }

  updateRateArray(): void {
    reaction(
      () => this.startDate,
      () => {
        this.init();
      },
    );
  }

  public async init() {
    if (this.code === undefined) {
      return;
    }

    const histRates = await this.store.getHistoryRates(this.code, this.startDate, this.yesterday); //массив курсов с даты по дату
    runInAction(() => (this.ratesArray = histRates));
  }
}

DiContainer.register(LineChartViewModel, LineChartViewModel);
