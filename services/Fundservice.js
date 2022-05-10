"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundService = void 0;
var FundService = /** @class */ (function () {
    function FundService(fundRepo) {
        this.fundRepo = fundRepo;
    }
    FundService.prototype.handleAddStock = function (words) {
        var fund = null;
        try {
            fund = this.fundRepo.getFundByName(words[1]);
        }
        catch (e) {
            console.log(" overlap " + e.message + " " + words[1]);
        }
        fund === null || fund === void 0 ? void 0 : fund.addStock(words
            .filter(function (_, index) {
            return index > 1;
        })
            .join());
    };
    FundService.prototype.handleOverlap = function (words, portfolio) {
        var fund = null;
        try {
            fund = this.fundRepo.getFundByName(words[1]);
        }
        catch (e) {
            console.log("" + e.message);
        }
        if (fund)
            for (var index = 0; index < portfolio.funds.length; index++) {
                console.log(fund.title + " " + portfolio.funds[index].title + " " + portfolio.funds[index].fundOverlap(fund) + "%");
            }
    };
    return FundService;
}());
exports.FundService = FundService;
