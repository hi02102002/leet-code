function buyChoco(prices: number[], money: number): number {
   prices = prices.sort((a, b) => a - b);
   const sum = prices[0] + prices[1];

   if (money - sum < 0) {
      return money;
   }

   return money - sum;
}
