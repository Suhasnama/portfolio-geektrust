import { Fund } from "./fund";

export class Portfolio {
  title: String;
  funds: Fund[];
  constructor(title: String) {
    this.title = title;
    this.funds = [];
  }

  addFund(fund: Fund): void {
    if (this.funds.includes(fund)) {
      // Fund already present
      return;
    }
    this.funds.push(fund);
  }
}
