export class Hike {

  id: number;
  name: string;
  length: number;
  date: string;
  totalTime: string;

  constructor(id?: number, name?: string, length?: number, date?: string, totalTime?: string) {
    this.id = id;
    this.name = name;
    this.length = length;
    this.date = date;
    this.totalTime = totalTime;
  }
}
