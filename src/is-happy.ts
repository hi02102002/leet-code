function isHappy(n: number): boolean {
   const set = new Set();

   const calcSum = (n: number): number => {
      let sum = 0;

      while (n !== 0) {
         sum += Math.pow(n % 10, 2);

         n = Math.floor(n / 10);
      }

      return sum;
   };

   while (n !== 1) {
      n = calcSum(n);

      if (set.has(n)) {
         return false;
      }

      set.add(n);
   }

   return true;
}

console.log(isHappy(19));
