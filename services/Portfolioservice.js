"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioService = void 0;
var PortfolioService = /** @class */ (function () {
    function PortfolioService(fundRepo) {
        this.fundRepo = fundRepo;
    }
    PortfolioService.prototype.handleAddFund = function (words, portfolio) {
        for (var index = 0; index < words.length; index++) {
            if (index != 0) {
                try {
                    portfolio.addFund(this.fundRepo.getFundByName(words[index]));
                }
                catch (e) {
                    console.log("" + e.message);
                }
            }
        }
    };
    return PortfolioService;
}());
exports.PortfolioService = PortfolioService;
