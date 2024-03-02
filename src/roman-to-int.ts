function romanToInt(s: string): number {
   const roman: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
   };
   let result = 0;

   for (let i = 0; i < s.length; i++) {
      const curr = s[i];
      const next = s[i + 1];

      if (roman[curr] < roman[next]) {
         result = result + roman[next] - roman[curr];
         i++;
      } else {
         result += roman[curr];
      }
   }

   return result;
}

console.log(romanToInt('MCMXCIV'));
