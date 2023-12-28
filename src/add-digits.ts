function addDigits(num: number): number {
   if (num < 10) {
      return num;
   }

   const calcSum = (n: number): number => {
      let sum = 0;

      while (n !== 0) {
         sum += n % 10;

         n = Math.floor(n / 10);
      }

      return sum;
   };

   while (num >= 10) {
      num = calcSum(num);
   }

   return num;
}

console.log(addDigits(38));
