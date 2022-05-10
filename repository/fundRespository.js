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
exports.FundRepository = void 0;
var fund_1 = require("../entities/fund");
var funds_json_1 = __importDefault(require("../funds.json"));
var FundRepository = /** @class */ (function () {
    function FundRepository() {
    }
    FundRepository.prototype.getFundByName = function (fundName) {
        for (var index = 0; index < FundRepository.funds.length; index++) {
            if (FundRepository.funds[index].title == fundName) {
                return FundRepository.funds[index];
            }
        }
        throw new Error("FUND_NOT_FOUND");
    };
    FundRepository.funds = funds_json_1.default.funds.map(function (fund) {
        return new (fund_1.Fund.bind.apply(fund_1.Fund, __spreadArray([void 0, fund.name], fund.stocks)))();
    });
    return FundRepository;
}());
exports.FundRepository = FundRepository;
