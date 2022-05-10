"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fund = void 0;
var helper_1 = require("../lib/helper");
var Fund = /** @class */ (function () {
    function Fund(title) {
        var stocks = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            stocks[_i - 1] = arguments[_i];
        }
        this.title = title;
        this.stocks = stocks;
    }
    /**
     * Adds the stock to fund if already not added.
     * @param {String} stock Name of the stock
     * @returns
     */
    Fund.prototype.addStock = function (stock) {
        if (this.stocks.includes(stock)) {
            // Stock already present
            return;
        }
        this.stocks.push(stock);
    };
    /**
     * Returns fund overlap of given fund with current fund.
     * @param {Fund} fund Fund instance to calculate the fund overlap with this fund.
     * @returns Number
     */
    Fund.prototype.fundOverlap = function (fund) {
        if (this.stocks.length === 0 || fund.stocks.length == 0)
            return 0.0;
        var intersectionCount = helper_1.intersection(this.stocks, fund.stocks).length;
        return (((intersectionCount * 2) / (this.stocks.length + fund.stocks.length)) *
            100).toFixed(2);
    };
    return Fund;
}());
exports.Fund = Fund;
