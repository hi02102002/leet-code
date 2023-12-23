function maxScore(s: string): number {
   let max = Number.MIN_VALUE;
   let map = {
      0: 1,
      1: 0,
   };
   const numbers = s.split('').map((c) => Number(c));

   for (let i = 0; i < numbers.length - 1; i++) {
      const left = numbers.slice(0, i + 1).reduce((prev, current) => {
         return prev + map[current];
      }, 0);

      const right = numbers.slice(i + 1).reduce((prev, current) => {
         return prev + current;
      }, 0);

      if (right + left > max) {
         max = right + left;
      }
   }

   return max;
}
