import { Fund } from "../entities/fund";
import fundData from "../funds.json";

export class FundRepository {
  static funds: Array<Fund> = fundData.funds.map(
    (fund: { name: string | String; stocks: any }) => {
      return new Fund(fund.name, ...fund.stocks);
    }
  );

  constructor() {}

  getFundByName(fundName: String) {
    for (let index = 0; index < FundRepository.funds.length; index++) {
      if (FundRepository.funds[index].title == fundName) {
        return FundRepository.funds[index];
      }
    }
    throw new Error("FUND_NOT_FOUND");
  }
}
