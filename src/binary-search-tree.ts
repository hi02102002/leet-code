class TreeNode<T> {
   value: T;
   left: TreeNode<T> | null;
   right: TreeNode<T> | null;
   constructor(value: T) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

class BST<T> {
   root: TreeNode<T> | null;

   constructor() {
      this.root = null;
   }

   insert(value: T) {
      const nNode = new TreeNode(value);

      const helper = (root: TreeNode<T> | null) => {
         if (!root) {
            return nNode;
         }

         if (value > root.value) {
            root.right = helper(root.right);
         } else if (value < root.value) {
            root.left = helper(root.left);
         }

         return root;
      };

      this.root = helper(this.root);
   }

   delete(value: T) {
      const helper = (root: TreeNode<T> | null, value: T) => {
         if (!root) return null;

         if (value < root.value) {
            root.left = helper(root.left, value);
         } else if (value > root.value) {
            root.right = helper(root.right, value);
         } else {
            if (!root.left && !root.right) {
               return null;
            }

            if (!root.left) {
               return root.right;
            }

            if (!root.right) {
               return root.left;
            }

            let tNode = this.findMinimumLeaf(root.right);

            root.value = tNode!.value;
            root.right = helper(root.right, tNode!.value);
         }

         return root;
      };

      this.root = helper(this.root, value);
   }

   findMinimumLeaf(root: TreeNode<T> | null) {
      let current = root;
      while (current?.left) {
         current = current.left;
      }
      return current;
   }
}

const deepBothInvalidBST = new BST<number>();

deepBothInvalidBST.insert(15);
deepBothInvalidBST.insert(8);
deepBothInvalidBST.insert(25);
deepBothInvalidBST.insert(5);
deepBothInvalidBST.insert(12);
deepBothInvalidBST.insert(18);
deepBothInvalidBST.insert(30);
deepBothInvalidBST.insert(3);
deepBothInvalidBST.insert(6);
deepBothInvalidBST.insert(10);
deepBothInvalidBST.insert(14);
deepBothInvalidBST.insert(20);
deepBothInvalidBST.insert(28);
deepBothInvalidBST.insert(35);
deepBothInvalidBST.insert(1);
deepBothInvalidBST.insert(4);
deepBothInvalidBST.insert(7);
deepBothInvalidBST.insert(11);
deepBothInvalidBST.insert(13);
deepBothInvalidBST.insert(16);
deepBothInvalidBST.insert(22);
deepBothInvalidBST.insert(26);
deepBothInvalidBST.insert(32);

// Modify the tree to make it invalid on both sides
deepBothInvalidBST.root!.left!.right!.right!.value = 11;
deepBothInvalidBST.root!.right!.left!.left!.value = 28;

const isBST = (bst: BST<number>) => {
   const helper = (
      root: TreeNode<number> | null,
      min: number,
      max: number
   ): boolean => {
      if (!root) return true;

      if (root.value <= min || root.value >= max) {
         return false;
      }

      return (
         helper(root.left, min, root.value) &&
         helper(root.right, root.value, max)
      );
   };

   return helper(bst.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

console.log(isBST(invalidBST));
