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

/**
 * 94. Binary Tree Inorder Traversal
 * @url https://leetcode.com/problems/binary-tree-inorder-traversal
 * @param root
 * @returns
 * @time-complexity O(n)
 * @space-complexity O(n)
 */
function inorderTraversal(root: TreeNode | null): number[] {
   const result: number[] = [];

   const helper = (root: TreeNode | null) => {
      if (!root) return;

      helper(root.left);
      result.push(root.val);

      helper(root.right);
   };

   helper(root);

   return result;
}
