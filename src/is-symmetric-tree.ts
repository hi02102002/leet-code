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

function isSymmetric(root: TreeNode | null): boolean {
   const helper = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
      if (node1 === null && node2 === null) return true;

      if (node1 === null || node2 === null) return false;

      return (
         node1.val === node2.val &&
         helper(node1.left, node2.right) &&
         helper(node1.right, node2.left)
      );
   };

   return helper(root, root);
}

console.log(
   isSymmetric(
      new TreeNode(
         1,
         new TreeNode(2, new TreeNode(3), new TreeNode(4)),
         new TreeNode(2, new TreeNode(4), new TreeNode(3))
      )
   )
);
