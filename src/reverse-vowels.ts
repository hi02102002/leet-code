/**
 * 
 * 345. Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 */

import { swap } from './utlis';

function reverseVowels(s: string): string {
   const strs = s.split('');
   const vowels = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
      A: true,
      E: true,
      I: true,
      O: true,
      U: true,
   };

   let i = 0;
   let j = s.length - 1;

   while (i < j) {
      if (!vowels[strs[i]] && !vowels[strs[j]]) {
         i++;
         j--;
      } else if (!vowels[strs[i]] && vowels[strs[j]]) {
         i++;
      } else if (vowels[strs[i]] && !vowels[strs[j]]) {
         j--;
      } else {
         swap(strs, i, j);
         i++;
         j--;
      }
   }

   return strs.join('');
}
