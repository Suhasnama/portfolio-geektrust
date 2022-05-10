import { Portfolio } from "./entities/portfolio";
import { COMMANDS } from "./lib/helper";
import { FundRepository } from "./repository/fundRespository";
// Functional approach
function processCommands(
  commands: string[],
  portfolio: Portfolio,
  fundRepo: FundRepository
): void {
  for (let linesIndex = 0; linesIndex < commands.length; linesIndex++) {
    const words = commands[linesIndex].split(" ");

    if (words[0] == COMMANDS.CURRENT_PORTFOLIO) {
      handleAddFund(fundRepo, words, portfolio);
    } else if (words[0] == COMMANDS.CALCULATE_OVERLAP) {
      handleOverlap(fundRepo, words, portfolio);
    } else if (words[0] == COMMANDS.ADD_STOCK) {
      handleAddStock(fundRepo, words);
    } else {
      console.log(`Unkown command ${words[0]}`);
    }
  }
}

// PF Service
function handleAddFund(
  fundRepo: FundRepository,
  words: String[],
  portfolio: Portfolio
) {
  for (let index = 0; index < words.length; index++) {
    if (index != 0) {
      try {
        portfolio.addFund(fundRepo.getFundByName(words[index]));
      } catch (e) {
        console.log(`${e.message}`);
      }
    }
  }
}

// Fund Service
function handleOverlap(
  fundRepo: FundRepository,
  words: String[],
  portfolio: Portfolio
) {
  let fund = null;
  try {
    fund = fundRepo.getFundByName(words[1]);
  } catch (e) {
    console.log(`${e.message}`);
  }

  if (fund)
    for (let index = 0; index < portfolio.funds.length; index++) {
      console.log(
        `${fund.title} ${portfolio.funds[index].title} ${portfolio.funds[
          index
        ].fundOverlap(fund)}%`
      );
    }
}

function handleAddStock(fundRepo: FundRepository, words: String[]) {
  let fund = null;
  try {
    fund = fundRepo.getFundByName(words[1]);
  } catch (e) {
    console.log(` overlap ${e.message} ${words[1]}`);
  }

  fund?.addStock(
    words
      .filter((_, index) => {
        return index > 1;
      })
      .join()
  );
}
