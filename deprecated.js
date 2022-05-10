"use strict";
function processCommands(commands, portfolio, fundRepo) {
    for (var linesIndex = 0; linesIndex < commands.length; linesIndex++) {
        var words = commands[linesIndex].split(" ");
        if (words[0] == COMMANDS.CURRENT_PORTFOLIO) {
            handleAddFund(fundRepo, words, portfolio);
        }
        else if (words[0] == COMMANDS.CALCULATE_OVERLAP) {
            handleOverlap(fundRepo, words, portfolio);
        }
        else if (words[0] == COMMANDS.ADD_STOCK) {
            handleAddStock(fundRepo, words);
        }
        else {
            console.log("Unkown command " + words[0]);
        }
    }
}
// PF Service
function handleAddFund(fundRepo, words, portfolio) {
    for (var index = 0; index < words.length; index++) {
        if (index != 0) {
            try {
                portfolio.addFund(fundRepo.getFundByName(words[index]));
            }
            catch (e) {
                console.log("" + e.message);
            }
        }
    }
}
// Fund Service
function handleOverlap(fundRepo, words, portfolio) {
    var fund = null;
    try {
        fund = fundRepo.getFundByName(words[1]);
    }
    catch (e) {
        console.log("" + e.message);
    }
    if (fund)
        for (var index = 0; index < portfolio.funds.length; index++) {
            console.log(fund.title + " " + portfolio.funds[index].title + " " + portfolio.funds[index].fundOverlap(fund) + "%");
        }
}
function handleAddStock(fundRepo, words) {
    var fund = null;
    try {
        fund = fundRepo.getFundByName(words[1]);
    }
    catch (e) {
        console.log(" overlap " + e.message + " " + words[1]);
    }
    fund === null || fund === void 0 ? void 0 : fund.addStock(words
        .filter(function (_, index) {
        return index > 1;
    })
        .join());
}
