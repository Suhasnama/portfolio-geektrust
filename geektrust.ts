import { readFile } from "fs/promises";
import { Portfolio } from "./entities/portfolio";
import { FundRepository } from "./repository/fundRespository";
import { COMMANDS } from "./lib/helper";
import { PortfolioService } from "./services/Portfolioservice";
import { FundService } from "./services/Fundservice";

// Driver IIF
(async function main() {
  const filename = process.argv[2];

  const commands: string[] = await getInputCommands(filename);

  const portfolio = new Portfolio("First Portfolio");
  const fundRepo = new FundRepository();
  const portfolioService = new PortfolioService(fundRepo);
  const fundService = new FundService(fundRepo);
  processCommands(commands, portfolio, portfolioService, fundService);
})();

/**
 * Returns array of lines from given file
 * @param filename Path to input data file
 * @returns Array<String>
 */
async function getInputCommands(filename: string): Promise<string[]> {
  let inputContent = await readFile(filename, { encoding: "utf8" });
  return inputContent.toString().split("\n");
}

/**
 * Process all commands
 * @param commands Commands to process
 * @param portfolio Instance of Portfolio entity
 * @param portfolioService Instance of PortfolioService
 * @param fundService Instance of FundService entity
 */
function processCommands(
  commands: string[],
  portfolio: Portfolio,
  portfolioService: PortfolioService,
  fundService: FundService
) {
  for (let linesIndex = 0; linesIndex < commands.length; linesIndex++) {
    const words = commands[linesIndex].split(" ");
    if (words[0] == COMMANDS.CURRENT_PORTFOLIO) {
      portfolioService.handleAddFund(words, portfolio);
    } else if (words[0] == COMMANDS.CALCULATE_OVERLAP) {
      fundService.handleOverlap(words, portfolio);
    } else if (words[0] == COMMANDS.ADD_STOCK) {
      fundService.handleAddStock(words);
    } else {
      console.log(`Unkown command ${words[0]}`);
    }
  }
}
