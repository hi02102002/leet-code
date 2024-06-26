function isPalindrome(s: string): boolean {
   s = s.replace(/[^A-Z0-9]/gi, '').toLowerCase();
   let i = 0;
   let j = s.length - 1;

   if (s.length === 0) return true;

   while (i < j) {
      if (s[i] !== s[j]) {
         return false;
      }

      i++;
      j--;
   }

   return true;
}
