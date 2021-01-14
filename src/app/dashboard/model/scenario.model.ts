export class Scenario {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public creationDate: Date,
    public updateDate: Date,
    public lastRun: Date
  ) {
  }
}
