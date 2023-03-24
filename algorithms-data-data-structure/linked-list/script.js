class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds value at end
  append(data) {
    const node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }

    this.size++;
  }
  // adds value at start 
  prepend(data){encodeURI
    const node = new Node(data)
    node.nextNode = this.head
    this.head = node
    this.size++
  }

  printData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}

const ll = new LinkedList();
ll.append(100);
ll.append(200)
ll.prepend(300)
ll.printData();
