class TreeNode {
   val: number;
   left: TreeNode | null;
   right: TreeNode | null;
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
   }
}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
   let sum = low + high;

   const helper = (node: TreeNode | null) => {
      if (!node) return;

      if (node.val > low && node.val < high) {
         sum += node.val;
      }

      if (high <= node.val) {
         helper(node.left);
      } else if (low >= node.val) {
         helper(node.right);
      } else {
         helper(node.left);
         helper(node.right);
      }
   };

   helper(root);

   return sum;
}
