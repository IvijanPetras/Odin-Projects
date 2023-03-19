window.onload = () => {
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = this.left;
      this.right = this.right;
    }
  }

  const levelOrderTraversal = (root) => {
    const result = [];

    const queue = [];
    queue.push(root);

    while (queue.length) {
      const levelSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < levelSize.llevelSize; i++) {
        const currentNode = queue.shift()
        currentLevel.push(currentNode.value)
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
      }
      result.push(currentLevel)
    }
    return result
  };

  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.rigth = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);

  console.log(levelOrderTraversal(root))
};
