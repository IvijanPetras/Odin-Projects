
//   class TreeNode {
//     constructor(val) {
//       this.val = val;
//       this.left = null;
//       this.right = null;
//     }
//   }

//   const levelOrderTraversal = (root) => {
//     const result = [];

//     const queue = [];
//     queue.push(root);

//     while (queue.length) {
//       const levelSize = queue.length
//       const currentLevel = []

//       for (let i = 0; i < levelSize; i++) {
//         const currentNode = queue.shift()
//         currentLevel.push(currentNode.val)
//         if(currentNode.left){
//             queue.push(currentNode.left)
//         }
//         if(currentNode.right){
//             queue.push(currentNode.right)
//         }
//       }
//       result.push(currentLevel)
//     }
//     return result
//   };

//   const root = new TreeNode(1);
//   root.left = new TreeNode(2);
//   root.right = new TreeNode(3);
//   root.left.left = new TreeNode(4);
//   root.left.right = new TreeNode(5);
//   root.right.left = new TreeNode(6);
//   root.right.right = new TreeNode(7);

  //console.log(levelOrderTraversal(root))

  // --------------------------------------------

//   class Node{
//     constructor(val){
//         this.val = val
//         this.left = null
//         this.right = null
//     }
//   }

//   const a = new Node('a')
//   const b = new Node('b')
//   const c = new Node('c')
//   const d = new Node('d')
//   const e = new Node('e')
//   const f = new Node('f')
//   const g = new Node ('g')

//   a.left = b
//   a.right = c
//   b.left = d
//   b.right = e
//   c.left = f
//   c.right = g

  //        a
  //      /   \
  //     b     c
  //    / \   / \
  //   d   e f   g

//   const depthFirstTraversal = (root) => {
//     const stack = [root]
//     while (stack.length){
//         const currentElement = stack.pop()
//         console.log(currentElement)
//         //add currentElemets children
//         if(currentElement.right !== null){
//             stack.push(currentElement.right) 
//         }
//         if(currentElement.left !== null){
//             stack.push(currentElement.left)
//         }
//     }
//   } // time complexity O(n), space comp. O(n)

//   const depthFirstTraversalRecursive = (root) => {
//       // the tree is empty
//     if(root === null) return 

//     depthFirstTraversalRecursive(root.left)
//     console.log(root.val)
//     depthFirstTraversalRecursive(root.right)
//   }

//   depthFirstTraversalRecursive(a)

// ---------------------------------------------------------------------

// Linked List

    const n1 = {
        data: 100
    }

    const n2 = {
        data: 200
    }

    n1.next = n2

    console.log(n1)


    class Node {
        constructor(data, next = null){
            this.data = data
            this.next = next
        }
    }
    

