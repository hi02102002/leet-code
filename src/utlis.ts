export const swap = <T = string>(arr: T[], i: number, j: number) => {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
};
