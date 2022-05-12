import { Portfolio } from "../entities/portfolio";
import { FundRepository } from "../repository/fundRespository";

export class FundService {
  fundRepo: FundRepository;
  constructor(fundRepo: FundRepository) {
    this.fundRepo = fundRepo;
  }

  handleAddStock(words: String[]) {
    let fund = null;
    try {
      fund = this.fundRepo.getFundByName(words[1]);
    } catch (e) {
      console.log(`${e.message}`);
    }

    fund?.addStock(
      words
        .filter((_, index) => {
          return index > 1;
        })
        .join(" ")
    );
  }

  handleOverlap(words: String[], portfolio: Portfolio) {
    let fund = null;
    try {
      fund = this.fundRepo.getFundByName(words[1]);
    } catch (e) {
      console.log(`${e.message}`);
    }

    if (fund)
      for (let index = 0; index < portfolio.funds.length; index++) {
        const fOp = portfolio.funds[index].fundOverlap(fund);
        if (fOp != 0.0) {
          console.log(`${fund.title} ${portfolio.funds[index].title} ${fOp}%`);
        }
      }
  }
}
