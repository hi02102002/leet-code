/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
   let j = 0;
   for (let i = s.length - 1; i >= 0 && i > j; i--) {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      j++;
   }
}
