"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var fund_1 = require("../../entities/fund");
var portfolio_1 = require("../../entities/portfolio");
describe("Portfolio entity tests", function () {
    var portfolioTitle = "Test fund";
    var fundTitle = "Test fund";
    var fundStocks = ["TCS", "Paytm", "TATA MOTORS"];
    describe("Portfolio entity creational tests", function () {
        it("Portfolio entity title test", function () {
            var portfolio = new portfolio_1.Portfolio(portfolioTitle);
            assert_1.default.equal(portfolio.title, portfolioTitle);
        });
    });
    describe("Portfolio functionality tests", function () {
        it("Add funds to portfolio", function () {
            var fund = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            var portfolio = new portfolio_1.Portfolio(portfolioTitle);
            portfolio.addFund(fund);
            assert_1.default.deepEqual([fund], portfolio.funds);
        });
        it("Add duplicate fund to portfolio", function () {
            var fund = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            var portfolio = new portfolio_1.Portfolio(portfolioTitle);
            portfolio.addFund(fund);
            portfolio.addFund(fund);
            assert_1.default.deepEqual([fund], portfolio.funds);
        });
    });
});
