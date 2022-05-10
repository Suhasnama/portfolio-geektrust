import assert from "assert";
import { Fund } from "../../entities/fund";
import { Portfolio } from "../../entities/portfolio";

describe("Portfolio entity tests", () => {
  const portfolioTitle = "Test fund";
  const fundTitle = "Test fund";
  const fundStocks = ["TCS", "Paytm", "TATA MOTORS"];

  describe("Portfolio entity creational tests", () => {
    it("Portfolio entity title test", () => {
      const portfolio = new Portfolio(portfolioTitle);
      assert.equal(portfolio.title, portfolioTitle);
    });
  });

  describe("Portfolio functionality tests", () => {
    it("Add funds to portfolio", () => {
      const fund = new Fund(fundTitle, ...fundStocks);
      const portfolio = new Portfolio(portfolioTitle);
      portfolio.addFund(fund);
      assert.deepEqual([fund], portfolio.funds);
    });

    it("Add duplicate fund to portfolio", () => {
      const fund = new Fund(fundTitle, ...fundStocks);
      const portfolio = new Portfolio(portfolioTitle);
      portfolio.addFund(fund);
      portfolio.addFund(fund);
      assert.deepEqual([fund], portfolio.funds);
    });
  });
});
