import assert from "assert";
import { Fund } from "../../entities/fund";

describe("Fund entity tests", () => {
  const fundTitle = "Test fund";
  const fundStocks = ["TCS", "Paytm", "TATA MOTORS"];
  describe("Fund entity creational tests", () => {
    it("Fund entity title test", () => {
      const fund = new Fund(fundTitle, ...fundStocks);
      assert.equal(fund.title, fundTitle);
    });

    it("Fund entity stocks test", () => {
      const fund = new Fund(fundTitle, ...fundStocks);
      assert.deepEqual(fundStocks, fund.stocks);
    });

    it("Fund entity without stocks test", () => {
      const fund = new Fund(fundTitle);
      assert.deepEqual([], fund.stocks);
    });
  });

  describe("Fund functionality tests", () => {
    it("Add stocks to fund", () => {
      const stock = "Geektrust";
      const fund = new Fund(fundTitle, ...fundStocks);
      fund.addStock(stock);
      fundStocks.push(stock);
      assert.deepEqual(fundStocks, fund.stocks);
      fundStocks.pop();
    });

    it("Duplicate stocks add to fund test", () => {
      const stock = "Geektrust";
      const fund = new Fund(fundTitle, ...fundStocks);
      fund.addStock(stock);
      fund.addStock(stock);
      fundStocks.push(stock);
      assert.deepEqual(fundStocks, fund.stocks);
      fundStocks.pop();
    });

    it("Fund overlap test", () => {
      const stock = "Geektrust";
      const fundOne = new Fund(fundTitle, ...fundStocks);
      const fundTwo = new Fund(fundTitle + " Two", ...fundStocks);
      fundTwo.addStock(stock);
      assert.equal(85.71, fundOne.fundOverlap(fundTwo));
    });

    it("Same fund's overlap test", () => {
      const stock = "Geektrust";
      const fundOne = new Fund(fundTitle, ...fundStocks);
      assert.equal(100.0, fundOne.fundOverlap(fundOne));
    });

    it("Empty fund overlap test", () => {
      const stock = "Geektrust";
      const fundOne = new Fund(fundTitle, ...fundStocks);
      const fundTwo = new Fund(fundTitle + " Two");
      assert.equal(0.0, fundOne.fundOverlap(fundTwo));
    });
  });
});
