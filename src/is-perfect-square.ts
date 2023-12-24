import { mySqrt } from './sqrt';

function isPerfectSquare(num: number): boolean {
   return mySqrt(num) * mySqrt(num) === num;
}
