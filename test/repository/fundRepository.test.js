"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var fundRespository_1 = require("../../repository/fundRespository");
describe("Fund Repository tests", function () {
    var fundRespository = new fundRespository_1.FundRepository();
    var existingFund = "MIRAE_ASSET_EMERGING_BLUECHIP";
    var nonExistingFund = "HDFC_ASSET_EMERGING_BLUECHIP";
    var errorMessage = "FUND_NOT_FOUND";
    it("getFundByName test with existing fund", function () {
        var fund = fundRespository.getFundByName(existingFund);
        assert_1.default.equal(fund.title, existingFund);
    });
    it("getFundByName test with non existing fund", function () {
        try {
            var fund = fundRespository.getFundByName(nonExistingFund);
        }
        catch (error) {
            assert_1.default.throws(function () {
                throw new Error(errorMessage);
            }, Error, errorMessage);
        }
    });
});
