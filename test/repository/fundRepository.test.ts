import assert from "assert";
import { FundRepository } from "../../repository/fundRespository";

describe(`Fund Repository tests`, () => {
  const fundRespository = new FundRepository();
  const existingFund = `MIRAE_ASSET_EMERGING_BLUECHIP`;
  const nonExistingFund = `HDFC_ASSET_EMERGING_BLUECHIP`;
  const errorMessage = `FUND_NOT_FOUND`;
  it(`getFundByName test with existing fund`, () => {
    const fund = fundRespository.getFundByName(existingFund);
    assert.equal(fund.title, existingFund);
  });

  it(`getFundByName test with non existing fund`, () => {
    try {
      const fund = fundRespository.getFundByName(nonExistingFund);
    } catch (error) {
      assert.throws(
        () => {
          throw new Error(errorMessage);
        },
        Error,
        errorMessage
      );
    }
  });
});
