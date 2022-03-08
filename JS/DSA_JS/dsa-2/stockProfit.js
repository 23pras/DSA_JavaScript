function bestTimeToBuyAndSellStocks(prices) {
  let maxProfit = 0;
  for (let i = 0; i <= prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }

    else {
      maxProfit
    }
  }
  return maxProfit
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(bestTimeToBuyAndSellStocks(prices));