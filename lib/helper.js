"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMMANDS = exports.intersection = void 0;
function intersection(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2))
        return array1.filter(function (stock) { return array2.includes(stock); });
    return [];
}
exports.intersection = intersection;
var COMMANDS;
(function (COMMANDS) {
    COMMANDS["CURRENT_PORTFOLIO"] = "CURRENT_PORTFOLIO";
    COMMANDS["CALCULATE_OVERLAP"] = "CALCULATE_OVERLAP";
    COMMANDS["ADD_STOCK"] = "ADD_STOCK";
})(COMMANDS = exports.COMMANDS || (exports.COMMANDS = {}));
