export function intersection<T>(array1: Array<T>, array2: Array<T>) {
  if (Array.isArray(array1) && Array.isArray(array2))
    return array1.filter((stock) => array2.includes(stock));
  return [];
}
export enum COMMANDS {
  CURRENT_PORTFOLIO = "CURRENT_PORTFOLIO",
  CALCULATE_OVERLAP = "CALCULATE_OVERLAP",
  ADD_STOCK = "ADD_STOCK",
}
