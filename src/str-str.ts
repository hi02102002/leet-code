function strStr(haystack: string, needle: string): number {
   for (let i = 0; i < haystack.length; i++) {
      let sub = haystack.slice(i, i + needle.length);

      if (sub === needle) {
         return i;
      }
   }

   return -1;
}

console.log(strStr('butsad', 'sad'));
