function strStr(haystack: string, needle: string): number {
   let i = 0;
   let j = 0;
   while (i < haystack.length) {
      if (haystack[i] === needle[j]) {
         j++;
      }

      if (j === needle.length) {
         console.log(i, j);
      }

      i++;
   }

   return 1;
}

console.log(strStr('leetcode', 'leeto'));
