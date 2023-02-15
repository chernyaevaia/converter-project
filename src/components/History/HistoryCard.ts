import { IHistory } from './IHistory';

export class HistoryCard implements IHistory {
  public date: string;
  public rate: string;
  public previousRate: string;

  public constructor(date: string, rate: string, prevRate: string) {
    this.date = date;
    this.rate = rate;
    this.previousRate = prevRate;
  }

  public get difference() {
    return (+this.rate - +this.previousRate).toFixed(2);
  }
}
