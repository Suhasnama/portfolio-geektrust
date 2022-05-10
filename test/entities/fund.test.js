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
describe("Fund entity tests", function () {
    var fundTitle = "Test fund";
    var fundStocks = ["TCS", "Paytm", "TATA MOTORS"];
    describe("Fund entity creational tests", function () {
        it("Fund entity title test", function () {
            var fund = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            assert_1.default.equal(fund.title, fundTitle);
        });
        it("Fund entity stocks test", function () {
            var fund = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            assert_1.default.deepEqual(fundStocks, fund.stocks);
        });
        it("Fund entity without stocks test", function () {
            var fund = new fund_1.Fund(fundTitle);
            assert_1.default.deepEqual([], fund.stocks);
        });
    });
    describe("Fund functionality tests", function () {
        it("Add stocks to fund", function () {
            var stock = "Geektrust";
            var fund = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            fund.addStock(stock);
            fundStocks.push(stock);
            assert_1.default.deepEqual(fundStocks, fund.stocks);
            fundStocks.pop();
        });
        it("Duplicate stocks add to fund test", function () {
            var stock = "Geektrust";
            var fund = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            fund.addStock(stock);
            fund.addStock(stock);
            fundStocks.push(stock);
            assert_1.default.deepEqual(fundStocks, fund.stocks);
            fundStocks.pop();
        });
        it("Fund overlap test", function () {
            var stock = "Geektrust";
            var fundOne = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            var fundTwo = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle + " Two"], fundStocks)))();
            fundTwo.addStock(stock);
            assert_1.default.equal(85.71, fundOne.fundOverlap(fundTwo));
        });
        it("Same fund's overlap test", function () {
            var stock = "Geektrust";
            var fundOne = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            assert_1.default.equal(100.0, fundOne.fundOverlap(fundOne));
        });
        it("Empty fund overlap test", function () {
            var stock = "Geektrust";
            var fundOne = new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fundTitle], fundStocks)))();
            var fundTwo = new fund_1.Fund(fundTitle + " Two");
            assert_1.default.equal(0.0, fundOne.fundOverlap(fundTwo));
        });
    });
});
