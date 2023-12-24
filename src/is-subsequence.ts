function isSubsequence(s: string, t: string): boolean {
   if (s.length === 0) {
      return true;
   }

   if (s.length > t.length) {
      return false;
   }

   let j = 0;
   for (let i = 0; i < t.length; i++) {
      const c = t[i];

      if (s[j] === c) {
         j += 1;
      }

      if (j === s.length) {
         return true;
      }
   }

   return false;
}
