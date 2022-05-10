import { Portfolio } from "../entities/portfolio";
import { FundRepository } from "../repository/fundRespository";

export class PortfolioService {
  fundRepo: FundRepository;
  constructor(fundRepo: FundRepository) {
    this.fundRepo = fundRepo;
  }

  handleAddFund(words: String[], portfolio: Portfolio) {
    for (let index = 0; index < words.length; index++) {
      if (index != 0) {
        try {
          portfolio.addFund(this.fundRepo.getFundByName(words[index]));
        } catch (e) {
          console.log(`${e.message}`);
        }
      }
    }
  }
}
