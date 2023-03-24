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

// const n1 = {
//   data: 100,
// };

// const n2 = {
//   data: 200,
// };

// n1.next = n2;

// console.log(n1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //Insert at index
  insertAt(data, index) {
    //if index is out of range
    if(index < 0 || index > this.size) return

    if(index === 0) {
        this.head = new Node(data,this.head)
        return;
    }
    const node = new Node(data)
    let current, previous
    // set current to first
    current = this.head
    let count = 0
    while (count < index){
        previous = current // Node before index
        count++
        current = current.next // Node after index
    }

    node.next = current
    previous.next = node

    this.size++
  }

  //Get at index
  getAt(index){
    let current = this.head
    let count = 0

    while(current){
        if (count == index){
            console.log(current.data)
        }
        count++
        current = current.next
    }
    return null
  }

  // Remove at index
  removeAt(index){
    if (index < 0 || index > this.size) return
    let current = this.head
    let previous
    let count = 0
    // Remove first
    if(index === 0) this.head = current.next
    while(count < index){
        count++
        previous = current
        current = current.next
    }

    previous.next = current.next
    this.size--
  }
  // Clear list
  clearList(){
    this.head = null
    this.size = 0
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.nextNode;
    }
  }
}
const ll = new LinkedList();

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500, 2)

ll.removeAt(4)

ll.printListData()

//ll.getAt(-1)
