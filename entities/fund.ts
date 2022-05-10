import { intersection } from "../lib/helper";

export class Fund {
  title: String;
  stocks: String[];
  constructor(title: string | String, ...stocks: (string | String)[]) {
    this.title = title;
    this.stocks = stocks;
  }

  /**
   * Adds the stock to fund if already not added.
   * @param {String} stock Name of the stock
   * @returns
   */
  addStock(stock: String) {
    if (this.stocks.includes(stock)) {
      // Stock already present
      return;
    }
    this.stocks.push(stock);
  }

  /**
   * Returns fund overlap of given fund with current fund.
   * @param {Fund} fund Fund instance to calculate the fund overlap with this fund.
   * @returns Number
   */
  fundOverlap(fund: Fund) {
    if (this.stocks.length === 0 || fund.stocks.length == 0) return 0.0;

    let intersectionCount = intersection(this.stocks, fund.stocks).length;

    return (
      ((intersectionCount * 2) / (this.stocks.length + fund.stocks.length)) *
      100
    ).toFixed(2);
  }
}
