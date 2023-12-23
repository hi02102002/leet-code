function findTheDifference(s: string, t: string): string | void {
   const dict1: Record<string, number> = {};
   const dict2: Record<string, number> = {};

   for (let c of s) {
      dict1[c] = dict1[c] ? dict1[c] + 1 : 1;
   }

   for (let c of t) {
      dict2[c] = dict2[c] ? dict2[c] + 1 : 1;

      if (!dict1[c]) {
         return c;
      }

      if (dict2[c] > dict1[c]) {
         return c;
      }
   }
}
