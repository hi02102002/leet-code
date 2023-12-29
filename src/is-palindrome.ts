function isPalindrome(s: string): boolean {
   s = s.replace(/[^A-Z0-9]/gi, '').toLowerCase();
   let i = 0;
   let j = s.length - 1;

   if (s.length === 0) return true;

   while (i < j) {
      console.log(s[i], s[j]);
      if (s[i] !== s[j]) {
         return false;
      }

      i++;
      j--;
   }

   return true;
}

console.log(isPalindrome('race a car'));
