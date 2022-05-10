"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
var Portfolio = /** @class */ (function () {
    function Portfolio(title) {
        this.title = title;
        this.funds = [];
    }
    Portfolio.prototype.addFund = function (fund) {
        if (this.funds.includes(fund)) {
            // Fund already present
            return;
        }
        this.funds.push(fund);
    };
    return Portfolio;
}());
exports.Portfolio = Portfolio;
