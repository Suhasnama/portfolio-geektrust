"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("fs/promises");
var portfolio_1 = require("./entities/portfolio");
var fundRespository_1 = require("./repository/fundRespository");
var helper_1 = require("./lib/helper");
var Portfolioservice_1 = require("./services/Portfolioservice");
var Fundservice_1 = require("./services/Fundservice");
// Driver IIF
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        var filename, commands, portfolio, fundRepo, portfolioService, fundService;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filename = process.argv[2];
                    return [4 /*yield*/, getInputCommands(filename)];
                case 1:
                    commands = _a.sent();
                    portfolio = new portfolio_1.Portfolio("First Portfolio");
                    fundRepo = new fundRespository_1.FundRepository();
                    portfolioService = new Portfolioservice_1.PortfolioService(fundRepo);
                    fundService = new Fundservice_1.FundService(fundRepo);
                    processCommands(commands, portfolio, portfolioService, fundService);
                    return [2 /*return*/];
            }
        });
    });
})();
/**
 * Returns array of lines from given file
 * @param filename Path to input data file
 * @returns Array<String>
 */
function getInputCommands(filename) {
    return __awaiter(this, void 0, void 0, function () {
        var inputContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promises_1.readFile(filename, { encoding: "utf8" })];
                case 1:
                    inputContent = _a.sent();
                    return [2 /*return*/, inputContent.toString().split("\n")];
            }
        });
    });
}
/**
 * Process all commands
 * @param commands Commands to process
 * @param portfolio Instance of Portfolio entity
 * @param portfolioService Instance of PortfolioService
 * @param fundService Instance of FundService entity
 */
function processCommands(commands, portfolio, portfolioService, fundService) {
    for (var linesIndex = 0; linesIndex < commands.length; linesIndex++) {
        var words = commands[linesIndex].split(" ");
        if (words[0] == helper_1.COMMANDS.CURRENT_PORTFOLIO) {
            portfolioService.handleAddFund(words, portfolio);
        }
        else if (words[0] == helper_1.COMMANDS.CALCULATE_OVERLAP) {
            fundService.handleOverlap(words, portfolio);
        }
        else if (words[0] == helper_1.COMMANDS.ADD_STOCK) {
            fundService.handleAddStock(words);
        }
        else {
            console.log("Unkown command " + words[0]);
        }
    }
}
