import { IHistory } from './IHistory';


export class HistoryCard implements IHistory {

    public date: string;
    public rate: number;
    public previousRate: number;
  
    public constructor(date: string, rate: number, prevRate:number) {
        this.date = date;
        this.rate = rate;
        this.previousRate = prevRate; //сюда передать предыдущий курс
    }

    public get difference() {
        return +(this.rate - this.previousRate).toFixed(2)
    }
    
}